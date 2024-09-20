import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import { usersPrisma } from "../utils/prisma/index.js";
import Joi from "joi";

const router = express.Router();

const cashSchema = Joi.object({
  cash: Joi.number().integer().min(0).required(),
});

router.patch("/users/cash", authMiddleware, async (req, res, next) => {
  try {
    const user = req.users;
    const { cash } = await cashSchema.validateAsync(req.body);
    const changedcharacter = await usersPrisma.users.update({
      where: {
        user_id: user.user_id,
      },
      data: {
        cash: { increment: cash },
      },
    });

    return res.status(200).json({
      message: `${cash} 캐시가 구매되었습니다.`,
      baseCash: `${users.cash} 캐시`,
      currentCash: `캐시`,
    });
  } catch (error) {
    next(error);
  }
});
export default router;
