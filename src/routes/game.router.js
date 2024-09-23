import express from "express";
import { usersPrisma, gamePrisma } from "../utils/prisma/index.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/game/:opposite_user_id",
  authMiddleware,
  async (req, res, next) => {
    const { opposite_user_id } = req.params;
    const { user_id } = req.user;

    try {
      // 우리팀 선수 가져오기
      const myteam = await usersPrisma.team_members.findFirst({
        where: { user_id },
        select: {
          agent_ids: true,
          team_name: true,
        },
      });

      // 상대팀 선수 가져오기
      const opponent = await usersPrisma.team_members.findFirst({
        where: { user_id: opposite_user_id },
        select: {
          agent_ids: true,
          team_name: true,
        },
      });

      // 피셔-예이츠 셔플로 선수 랜덤 배정
      const groups = { group1: [], group2: [], group3: [] };

      const shuffle = Array.from(
        { length: Object.keys(groups).length },
        (_, i) => i + 1,
      );

      for (let i = shuffle.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffle[i], shuffle[randomIndex]] = [shuffle[randomIndex], shuffle[i]];
      }

      // 우리팀 선수 섞어서 그룹에 추가
      myteam.agent_ids.forEach((agent_id, index) => {
        groups[`group${shuffle[index % shuffle.length]}`].push(agent_id);
      });

      // 상대팀 선수 섞어서 그룹에 추가
      opponent.agent_ids.forEach((agent_id, index) => {
        groups[`group${shuffle[index % shuffle.length]}`].push(agent_id);
      });

      // 에이전트 ID 목록으로 우리팀과 상대팀 선수들의 스탯 가져오기
      const allAgentIds = [...myteam.agent_ids, ...opponent.agent_ids];

      const agentsStats = await gamePrisma.agents.findMany({
        where: {
          agent_id: {
            in: allAgentIds,
          },
        },
        select: {
          agent_id: true,
          attack: true,
          defense: true,
          agent_name: true,
        },
      });

      // 각 그룹에 대한 골 성공 확률 계산
      let myTeamGoals = 0;
      const probabilitiesGroup = {};

      for (let i = 1; i <= 3; i++) {
        const group = groups[`group${i}`];

        // 그룹에 해당하는 우리팀과 상대팀 선수들의 스탯 가져오기
        const myAgentsStatsGroup = agentsStats.filter(
          (agent) =>
            group.includes(agent.agent_id) &&
            myteam.agent_ids.includes(agent.agent_id),
        );
        const opponentAgentsStatsGroup = agentsStats.filter(
          (agent) =>
            group.includes(agent.agent_id) &&
            opponent.agent_ids.includes(agent.agent_id),
        );

        let goalProbabilityGroup = 0;

        // 해당 그룹의 골 성공 확률 계산
        myAgentsStatsGroup.forEach((myAgent) => {
          opponentAgentsStatsGroup.forEach((opponentAgent) => {
            goalProbabilityGroup +=
              myAgent.attack / (myAgent.attack + opponentAgent.defense);
          });
        });

        // 골 성공 확률 백분율 계산
        const successRateGroup = goalProbabilityGroup * 100;
        probabilitiesGroup[`group${i}`] = `${successRateGroup.toFixed(2)}%`;

        // 0~100 사이에서 랜덤 값을 뽑아 성공 확률과 비교
        const randomChance = Math.random() * 100;
        if (randomChance <= successRateGroup) {
          myTeamGoals++; // 해당 그룹에서 우리팀이 골을 넣었음
        }
      }

      // 승패 따라서 전적 업데이트
      let result;

      if (myTeamGoals >= 2) {
        result = `축하합니다. [${myteam.team_name}] 승리!`;
        await usersPrisma.users.update({
          where: { user_id },
          data: {
            win: { increment: 1 },
            matches: { increment: 1 },
          },
        });
      } else {
        result = `우리팀 패배..`;
        await usersPrisma.users.update({
          where: { user_id },
          data: {
            lost: { increment: 1 },
            matches: { increment: 1 },
          },
        });
      }

      // 내 전적 가져오기
      const myRecord = await usersPrisma.users.findFirst({
        where: { user_id },
        select: { win: true, lost: true, matches: true },
      });

      // 승률 표시
      const odds = (myRecord.win / myRecord.matches) * 100;

      // 선수들 정보 가공 소속팀|아이디+이름
      let groupMember = { group1: [], group2: [], group3: [] };

      Object.keys(groups).forEach((groupKey) => {
        groups[groupKey].forEach((agent_id, index) => {
          const agent = agentsStats.find((a) => a.agent_id === agent_id);
          const teamName = myteam.agent_ids.includes(agent_id)
            ? `[My]      ` + myteam.team_name
            : `[Opponent]` + opponent.team_name;
          if (agent) {
            groupMember[groupKey].push(
              `${teamName}|${agent.agent_id} ${agent.agent_name}`,
            );
          }
        });
      });

      return res.status(200).json({
        message: "경기가 종료되었습니다!",
        groups: groupMember,
        goal_probability: probabilitiesGroup,
        my_team_goals: `${myTeamGoals}:${Object.keys(groups).length - myTeamGoals}`,
        result: result,
        odds_of_winning: `${odds}%`,
      });
    } catch (error) {
      return res.status(500).json({
        message: "에러가 발생했습니다.",
        error: error.message,
      });
    }
  },
);

export default router;
