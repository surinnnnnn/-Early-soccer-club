import express from "express";
import { usersPrisma } from "../utils/prisma/index.js";
import bcrypt from "bcrypt";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/games/:oppositeUser_Id",
  authMiddleware,
  async (req, res, next) => {
    const { oppositeUser_Id } = req.params;
    const { user_id } = req.user;

    try {
      // 우리팀 선수 가져오기
      const myteam = await usersPrisma.team_members.findMany({
        where: { user_id: +user_id },
        select: {
          agent_id: true,
        },
      });

      const groups = { group1: [], group2: [], group3: [] };

      // 우리팀 선수 섞기 1~3 그룹
      myteam.forEach((member) => {
        const randomGroup = Math.floor(Math.random() * 3) + 1;
        groups[`group${randomGroup}`].push(member.agent_id);
      });

      // 상대팀 선수 가져오기
      const opponent = await usersPrisma.team_members.findMany({
        where: { user_id: +oppositeUser_Id },
        select: {
          agent_id: true,
        },
      });

      // 상대 선수 섞어서 그룹에 추가
      opponent.forEach((member) => {
        const randomGroup = Math.floor(Math.random() * 3) + 1;
        groups[`group${randomGroup}`].push(member.agent_id);
      });

      // 에이전트 ID 목록을 기반으로 우리팀과 상대팀 선수들의 스탯 가져오기
      const myAgentsStats = await gamePrisma.agents.findMany({
        where: {
          agent_id: {
            in: myteam.map((member) => member.agent_id),
          },
        },
        select: {
          agent_id: true,
          attack: true,
        },
      });

      const opponentAgentsStats = await gamePrisma.agents.findMany({
        where: {
          agent_id: {
            in: opponent.map((member) => member.agent_id),
          },
        },
        select: {
          agent_id: true,
          defense: true,
        },
      });

      // 각 그룹에 대한 골 성공 확률 계산
      let myTeamGoals = 0;
      const groupProbabilities = {};
      
      for (let i = 1; i <= 3; i++) {
        const group = groups[`group${i}`];
      
        // 그룹에 해당하는 우리팀과 상대팀 선수들의 스탯 가져오기
        const groupMyAgentsStats = myAgentsStats.filter((agent) =>
          group.includes(agent.agent_id),
        );
        const groupOpponentAgentsStats = opponentAgentsStats.filter((agent) =>
          group.includes(agent.agent_id),
        );
      
        let groupGoalProbability = 0;
      
        // 해당 그룹의 골 성공 확률 계산
        groupMyAgentsStats.forEach((myAgent) => {
          groupOpponentAgentsStats.forEach((opponentAgent) => {
            // 성공 확률을 공격력 / (공격력 + 방어력)으로 계산
            const successProbability = myAgent.attack / (myAgent.attack + opponentAgent.defense);
            groupGoalProbability += successProbability;
          });
        });
      
        // 평균 확률 계산 (선수 수로 나눔)
        const groupSuccessRate = Math.min(Math.max((groupGoalProbability / groupMyAgentsStats.length) * 100, 0), 100);
        groupProbabilities[`group${i}`] = `${groupSuccessRate.toFixed(2)}%`;
      
        // 시뮬레이션: 0~100 사이에서 랜덤 값을 뽑아 성공 확률과 비교
        const randomChance = Math.random() * 100;
        if (randomChance <= groupSuccessRate) {
          myTeamGoals++; // 해당 그룹에서 우리팀이 골을 넣었음
        }
      }
      // 우리팀이 2골 이상 넣었는지 확인
      const result = myTeamGoals >= 2 ? "우리팀 승리!" : "우리팀 패배!";

      return res.status(200).json({
        message: "경기가 성공적으로 처리되었습니다.",
        groupProbabilities: groupProbabilities,
        myTeamGoals: myTeamGoals,
        result: result,
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
