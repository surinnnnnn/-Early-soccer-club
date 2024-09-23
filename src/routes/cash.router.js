import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { usersPrisma } from "../utils/prisma/index.js";

const router = express.Router();

router.patch("/users/cash", authMiddleware, async (req, res, next) => {
  try {
    const { user_id } = req.user;
    const { cash } = req.body;
    const updateUserCash = await usersPrisma.users.update({
      where: { user_id },
      data: {
        cash: { increment: cash },
      },
    });

    const user = await usersPrisma.users.findFirst({
      where: { user_id },
      select: {
        user_id: true,
        nickname: true,
        cash: true,
      },
    });

    return res.status(200).json({
      message: `${cash} 캐시가 구매되었습니다.`,
      current_cash: `${user.cash}`,
    });
  } catch (error) {
    next(error);
  }
});
export default router;
