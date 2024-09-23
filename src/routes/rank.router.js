import express from "express";
import { gamePrisma, usersPrisma } from "../utils/prisma/index.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/rank", async (req, res, next) => {
  // 1) 유저 정보 가져오기
  const users = await usersPrisma.users.findMany({
    where: { user_id },
    select: {
      user_id: true,
      nickname: true,
      win: true,
      matches: true,
    },
  });

  //2) 유저 정보로 승률 계산
  const userWithOddsAndRank = users.map((user) => {
    const odds = (user.win / user.matches) * 100;
    return {
      ...user,
      odds,
      rank: getRank(odds), // getRank 함수는 승률에 따른 랭크를 계산하는 함수로 정의 필요
    };
  });

  // 3) 유저들 승률로 랭킹 순 계산
});
export default router;
