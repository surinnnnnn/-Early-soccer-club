import express from "express";
import { gamePrisma } from "../utils/prisma/index.js";

const router = express.Router();

//1. 모든 선수들 조회
router.get("/all_agent", async (req, res) => {
  try {
    const agents = await gamePrisma.agents.findMany();
    res.json(agents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "서버 응답 오류" });
  }
});

export default router;
