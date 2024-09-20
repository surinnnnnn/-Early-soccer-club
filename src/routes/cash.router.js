import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { usersPrisma } from "../utils/prisma/index.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.patch("/user/cash", authMiddleware, async (req, res, next) => {
  try {
    const {user_id} = req.user;
    const {cash} = req.body;
    const changeduser = await usersPrisma.users.update({
      where: {
        user_id,
      },
      data: {
        cash: { increment: cash },
      },
    });

    const user = await usersPrisma.users.findFirst({
      where:{user_id},
      select:{
        user_id: true,
        nickname: true,
        cash: true,
      },
    })

    return res.status(200).json({
      message: `${cash} 캐시가 구매되었습니다.`,
      baseCash: `${user.cash} 캐시`,
      currentCash: `${changeduser.cash}캐시`,
    });
  } catch (error) {
    next(error);
  }
});
export default router;
