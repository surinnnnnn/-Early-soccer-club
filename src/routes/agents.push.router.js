import express from "express";
import { gamePrisma } from "../utils/prisma/index.js";
import data from "../utils/agentsDATA/agents.js"; // agents 데이터

const router = express.Router();

// POST 요청으로 agents 데이터를 DB에 삽입하는 라우터
router.post("/push/agents", async (req, res, next) => {
  try {
    for (const agent of data) {
      await gamePrisma.agents.create({
        data: {
          agent_id: agent.agent_id,
          agent_name: agent.agent_name,
          position: agent.position,
          attack: agent.attack,
          defense: agent.defense,
          speed: agent.speed,
        },
      });
    }

    res.status(200).json({ message: "모두 테이블에 추가 됐습니다!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 오류" });
  }
});

export default router;
