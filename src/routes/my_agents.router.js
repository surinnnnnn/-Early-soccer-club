import express from "express";
import { usersPrisma, gamePrisma } from "../utils/prisma/index.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

//1. 선수뽑기

router.post("/agent/gacha", authMiddleware, async (req, res) => {
  try {
    const { agent_id } = req.body;
    // 모든 선수 호출 추가가능한부분 스탯 몇이상 뽑기등 확장 가능
    const agent = await gamePrisma.agents.findMany();

    if (player.length === 0) {
      return res.status(404).json({
        message: "선수가 없습니다",
      });
    }
    //랜덤으로 선택
    const randomIndex = Math.floor(Math.random() * player.length);
    const drawnPlayer = player[randomIndex];

    //뽑은 선수 저장
    const agentgacha = await prisma.agent.create({
      data: {
        agent_name: drawnPlayer.name,
        agent_id: agent_id,
        attack: drawnPlayer.attack,
        defense: drawnPlayer.defense,
        speed: drawnPlayer.speed,
      },
    });
    // 성공
    res.status(200).json({
      message: `${drawnPlayer.name} 선수를 뽑았습니다`,
      data: agentgacha,
    });
  } catch (error) {
    res.status(500).json({
      message: "선수뽑기에 실패하였습니다.",
      error: error.message,
    });
  }
});
export default router;

//2) 보유 중인 agent 조회
router.get("/my_agent", async (req, res) => {
  try {
    const agent = await usersPrisma.my_agents.findMany();
    res.json(agent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "서버 응답 오류" });
  }
});
