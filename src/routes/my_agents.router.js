import express from "express";
import { usersPrisma, gamePrisma } from "../utils/prisma/index.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// 1. 선수 뽑기

router.post("/agent/gacha", authMiddleware, async (req, res, next) => {
  try {
    const { user_id } = req.user;
    const { count } = req.body;
    const price = 3000; // 가챠 가격

    // 1) 에이전트 뽑기
    const agentsCount = await gamePrisma.agents.count(); // 에이전트 총 개수 가져오기
    const randomAgent = await gamePrisma.agents.findFirst({
      where: { agent_id: Math.floor(Math.random() * agentsCount) + 1 }, // 랜덤 인덱스 생성
      select: {
        agent_id: true,
        agent_name: true,
        attack: true,
        defense: true,
        speed: true,
        position: true,
      },
    });

    // 2) 유저 소지금 확인
    const player = await usersPrisma.users.findFirst({
      where: { user_id },
      select: { cash: true },
    });

    if (price > player.cash) {
      return res.status(401).json({
        message: "잔액이 부족합니다.",
        remain_cash: player.cash,
      });
    }

    // 3) 유저가 이미 해당 에이전트를 소유하고 있는지 확인
    const isExistMember = await usersPrisma.my_agents.findFirst({
      where: {
        user_id,
        agent_id: randomAgent.agent_id, // 뽑은 에이전트의 ID
      },
      select: {
        my_agent_id: true,
        count: true, // 현재 소유한 수량
      },
    });

    if (isExistMember) {
      // 이미 에이전트를 소유하고 있을 경우 수량만 증가
      await usersPrisma.my_agents.update({
        where: {
          my_agent_id: isExistMember.my_agent_id, // 존재하는 에이전트 ID
        },
        data: {
          count: { increment: 1 }, // 소유 수량 +1 증가
        },
      });
    } else {
      // 해당 에이전트를 소유하지 않았을 경우 새로 생성
      await usersPrisma.my_agents.create({
        data: {
          user_id: user_id,
          agent_id: randomAgent.agent_id,
          agent_name: randomAgent.agent_name,
          count: 1, // 새로 생성 시 수량 1
        },
      });
    }

    // 4) 유저 소지금 업데이트
    const updatedCash = await usersPrisma.users.update({
      where: { user_id },
      data: {
        cash: { decrement: price }, // 소지금 차감
      },
    });

    // 5) 성공 응답
    return res.status(200).json({
      message: "선수를 성공적으로 뽑았습니다!",
      agent: randomAgent,
      remain_cash: updatedCash.cash,
    });
  } catch (error) {
    next(error); // 에러 핸들링
  }
});

// 2. 보유 중인 선수 목록 조회
router.get("/my_agent", authMiddleware, async (req, res, next) => {
  const { user_id } = req.user;

  // 유저가 보유한 에이전트 목록 조회
  const userAgents = await usersPrisma.my_agents.findMany({
    where: { user_id },
    select: {
      agent_id: true, // 에이전트 ID
      count: true, // 보유한 수량
    },
  });

  // 각 에이전트의 세부 정보 조회
  const detailedAgents = await Promise.all(
    userAgents.map(async (myAgent) => {
      const agentDetails = await gamePrisma.agents.findFirst({
        where: { agent_id: myAgent.agent_id },
        select: {
          agent_id: true,
          agent_name: true,
          attack: true,
          defense: true,
          speed: true,
          position: true,
        },
      });

      return { ...agentDetails, count: myAgent.count };
    }),
  );

  // 에이전트가 없을 경우 메시지 반환
  if (detailedAgents.length === 0) {
    return res.status(200).json({ message: "스카웃한 선수가 없습니다." });
  }

  // 결과 반환
  return res.status(200).json({ data: detailedAgents });
});

export default router;
