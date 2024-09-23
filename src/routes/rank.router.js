import express from "express";
import { usersPrisma } from "../utils/prisma/index.js";

const router = express.Router();

router.get("/rank", async (req, res, next) => {
  try {
    const usersWithRank = await usersPrisma.$queryRaw`
        SELECT
        user_id,
        nickname,
        win,
        match_count,
        IF(match_count > 0, (win / match_count) * 100, 0) AS odds,
        RANK() OVER (ORDER BY IF(match_count > 0, (win / match_count) * 100, 0) DESC) AS ranking
      FROM
        users
    `;
    //BigInt -> string으로 변환ㅜ
    const usersWithRankConversion = usersWithRank.map((user) => ({
      ...user,
      ranking: user.ranking ? user.ranking.toString() : null,
    }));
    return res.status(200).json({ rank: usersWithRankConversion });
  } catch (error) {
    return res.status(500).json({
      message: "에러가 발생했습니다.",
      error: error.message,
    });
  }
});

export default router;
