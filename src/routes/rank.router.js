import express from "express";
import { usersPrisma } from "../utils/prisma/index.js";

const router = express.Router();

router.get("/rank", async (req, res, next) => {
  try {
    // // 1) 유저 정보 가져오기
    // const users = await usersPrisma.users.findMany({
    //   select: {
    //     user_id: true,
    //     nickname: true,
    //     win: true,
    //     matches: true,
    //   },
    // });

    // //2) odds 칼럼 추가
    // const odds = users.map((user) => (user.win / user.matches) * 100);

    // const usersWithOdds = users.map((user, index) => ({
    //   ...user,
    //   odds: odds[index],
    // }));

    // //3) odds 로 sort
    // usersWithOdds.sort((a, b) => b.odds - a.odds);

    // //4) rank 칼럼 추가

    // const usersWithRank = usersWithOdds.map((user, index, arr) => {
    //   // odds 동점일 경우(앞 index랑 비교)
    //   if (index > 0 && user.odds === arr[index - 1].odds) {
    //     return { rank: arr[index - 1].rank, ...user };
    //   } else {
    //     return {
    //       rank: index + 1,
    //       ...user,
    //     };
    //   }
    // });

    const usersWithRank = await usersPrisma.users.$queryRaw`
        SELECT
        user_id,
        nickname,
        win,
        matches,
        IF(matches > 0, (win / matches) * 100, 0) AS odds,
        RANK() OVER (ORDER BY IF(matches > 0, (win / matches) * 100, 0) DESC) AS rank
      FROM
        users
    `;

    return res.status(200).json({ rank: usersWithRank });
  } catch (error) {
    return res.status(500).json({
      message: "에러가 발생했습니다.",
      error: error.message,
    });
  }
});

export default router;
