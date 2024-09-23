import express from "express";
import { gamePrisma, usersPrisma } from "../utils/prisma/index.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// 1. 팀 생성
router.post("/my_team", authMiddleware, async (req, res, next) => {
  try {
    const { user_id } = req.user;
    const { team_name, agent_ids } = req.body;

    //1) 필수 입력 누락
    if (!team_name || !agent_ids || agent_ids.length < 3) {
      return res.status(400).json({
        message:
          "필수 입력이 누락됐습니다. 팀 이름과 최소 3명의 선수 아이디가 필요합니다.",
      });
    }

    //2) 이미 보유한 팀 있음

    // 팀 정보 가져오기
    const myTeam = await usersPrisma.team_members.findFirst({
      where: { user_id },
      select: {
        user_id: true,
        team_name: true,
        agent_ids: true,
      },
    });

    const members = await gamePrisma.agents.findMany({
      where: { agent_id: { in: myTeam.agent_ids } },
      select: {
        agent_id: true,
        agent_name: true,
      },
    });

    const isExistMyteam = await usersPrisma.team_members.findFirst({
      where: { user_id },
    });

    if (isExistMyteam) {
      return res.status(400).json({
        message: "이미 보유한 팀이 있습니다.",
        team: myTeam.team_name,
        members,
      });
    }

    //3) 보유한 선수 부족
    const countOfmyagents = await usersPrisma.my_agents.count({
      where: { user_id },
    });

    if (countOfmyagents < 3) {
      return res.status(400).json({ message: "스카웃한 선수가 부족합니다." });
    }

    //4) 입력한 선수 아이디가 보유한 선수인지 확인
    const myAgents = await usersPrisma.my_agents.findMany({
      where: { user_id, agent_id: { in: agent_ids } },
    });

    if (myAgents.length !== agent_ids.length) {
      return res.status(400).json({
        message: "해당 선수를 보유하지 않았거나, 잘못된 선수를 선택하셨습니다.",
      });
    }

    //5) 중복된 팀 이름 입력
    const isExistTeam = await usersPrisma.team_members.findFirst({
      where: { team_name },
    });

    if (isExistTeam) {
      return res
        .status(400)
        .json({ message: "이미 사용 중인 팀 이름 입니다." });
    }

    //6) 팀 이름 길이 초과 및 특수 문자 사용
    if (team_name.length > 6) {
      return res
        .status(400)
        .json({ message: "6글자 이내 팀 이름만 사용 가능합니다." });
    }

    // 7) 팀 생성
    const newTeam = await usersPrisma.team_members.create({
      data: {
        user_id,
        team_name,
        agent_ids,
      },
    });

    return res.status(201).json({
      message: "팀이 성공적으로 생성되었습니다.",
      team: newTeam.team_name,
      members,
    });
  } catch (error) {
    return res.status(500).json({
      message: "에러가 발생했습니다.",
      error: error.message,
    });
  }
});

// 2. 팀 수정
router.patch("/my_team", authMiddleware, async (req, res, next) => {
  try {
    const { user_id } = req.user;
    const { team_name, agent_ids } = req.body;

    //1) 필수 입력 누락
    if (!team_name || !agent_ids || agent_ids.length < 3) {
      return res.status(400).json({
        message:
          "필수 입력이 누락됐습니다. 팀 이름과 최소 3명의 선수 아이디가 필요합니다.",
      });
    }

    //2) 보유한 팀이 없음
    const existingTeam = await usersPrisma.team_members.findFirst({
      where: { user_id },
    });

    if (!existingTeam) {
      return res
        .status(400)
        .json({ message: "보유하신 팀이 없습니다! 먼저 팀을 생성해주세요!" });
    }

    //3) 입력한 선수 아이디가 보유한 선수인지 확인
    const myAgents = await usersPrisma.my_agents.findMany({
      where: { user_id, agent_id: { in: agent_ids } },
    });

    if (myAgents.length !== agent_ids.length) {
      return res.status(400).json({
        message: "해당 선수를 보유하지 않았거나, 잘못된 선수를 선택하셨습니다.",
      });
    }

    //4) 중복된 팀 이름 입력 방지 (원래 팀 이름은 허용)
    const isExistTeam = await usersPrisma.team_members.findFirst({
      where: {
        team_name,
        user_id: { not: user_id }, // 원래 우리 팀 이름은 중복 체크하지 않음
      },
    });

    if (isExistTeam) {
      return res.status(400).json({ message: "이미 사용 중인 팀 이름입니다." });
    }

    //5) 팀 이름 길이 초과 및 특수 문자 사용
    if (team_name.length > 6) {
      return res
        .status(400)
        .json({ message: "6글자 이내 팀 이름만 사용 가능합니다." });
    }

    //6) 기존 팀 선수 삭제 및 새로운 선수 등록
    const teamUpdated = await usersPrisma.team_members.update({
      where: { team_id: existingTeam.team_id },
      data: {
        user_id,
        team_name,
        agent_ids,
      },
    });

    //7) 팀 정보 가져오기
    const myTeam = await usersPrisma.team_members.findFirst({
      where: { user_id },
      select: {
        user_id: true,
        team_name: true,
        agent_ids: true,
      },
    });

    const members = await gamePrisma.agents.findMany({
      where: { agent_id: { in: agent_ids } },
      select: {
        agent_id: true,
        agent_name: true,
      },
    });

    return res.status(200).json({
      message: "팀이 성공적으로 수정되었습니다.",
      team: myTeam.team_name,
      members,
    });
  } catch (error) {
    return res.status(500).json({
      message: "에러가 발생했습니다.",
      error: error.message,
    });
  }
});

//3.팀 상세 조회(우리팀 과 상대팀의 스탯 비교)
router.get(
  "/my_team/:opposite_user_id",
  authMiddleware,
  async (req, res, next) => {
    try {
      const { user_id } = req.user;
      const { opposite_user_id } = req.params;

      // 1) 보유한 팀이 없음
      const existingTeam = await usersPrisma.team_members.findFirst({
        where: { user_id },
        select: {
          team_name: true,
          agent_ids: true, // 팀 멤버 정보 포함
        },
      });

      if (!existingTeam) {
        return res.status(400).json({
          message: "보유하신 팀이 없습니다! 먼저 팀을 생성해주세요!",
        });
      }

      // 3) 우리팀 멤버 스탯 정보 가져오기
      const myTeamStats = await gamePrisma.agents.findMany({
        where: { agent_id: { in: existingTeam.agent_ids } },
        select: {
          agent_id: true,
          agent_name: true,
          position: true,
          attack: true,
          defense: true,
          speed: true,
        },
      });

      // 4) 상대팀 정보 가져오기
      const otherTeam = await usersPrisma.team_members.findFirst({
        where: { user_id: opposite_user_id },
        select: {
          team_name: true,
          agent_ids: true, // 상대 팀 멤버 정보 포함
        },
      });

      if (!otherTeam) {
        return res.status(400).json({
          message: "상대 팀이 존재하지 않습니다.",
        });
      }

      const otherTeamStats = await gamePrisma.agents.findMany({
        where: { agent_id: { in: otherTeam.agent_ids } },
        select: {
          agent_id: true,
          agent_name: true,
          position: true,
          attack: true,
          defense: true,
          speed: true,
        },
      });

      // 6) 결과 반환
      return res.status(200).json({
        message: "팀 정보 조회 성공",
        my_team: {
          team_name: existingTeam.team_name,
          user_id: user_id,
          members: myTeamStats,
        },
        opposite_team: {
          team_name: otherTeam.team_name,
          user_id: opposite_user_id,
          members: otherTeamStats,
        },
      });
    } catch (error) {
      return res.status(500).json({
        message: "에러가 발생했습니다.",
        error: error.message,
      });
    }
  },
);

// 4. 팀 목록 조회(로그인 없어도 조회는 가능)
router.get("/teams", async (req, res, next) => {
  try {
    // 팀 목록을 조회, 팀 이름과 팀 멤버들 포함
    const teams = await usersPrisma.team_members.findMany({
      select: {
        team_name: true,
        user_id: true,
        agent_ids: true,
      },
    });
    // 각 팀의 agent_ids를 기반으로 agent 정보 조회
    const teamDataPromises = teams.map(async (team) => {
      // agent_ids 배열에서 각 agent의 정보를 조회
      const members = await gamePrisma.agents.findMany({
        where: { agent_id: { in: team.agent_ids } },
        select: {
          agent_id: true,
          agent_name: true,
        },
      });

      // 팀 데이터 형식 정의
      return {
        team_name: team.team_name,
        user_id: team.user_id,
        members: members.map(
          (member) => `${member.agent_id} : ${member.agent_name}`,
        ),
      };
    });

    // 모든 팀 데이터를 처리
    const teamData = await Promise.all(teamDataPromises);

    // 결과 반환
    return res.status(200).json({
      message: "팀 목록 조회 성공",
      data: teamData,
    });
  } catch (error) {
    return res.status(500).json({
      message: "에러가 발생했습니다.",
      error: error.message,
    });
  }
});

export default router;
