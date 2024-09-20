import express from "express";
<<<<<<< Updated upstream
import authMiddleware from "../middlewares/auth.middleware.js";
import { usersPrisma } from "../utils/prisma/index.js";
import Joi from "joi";
=======
import authMiddleware from "../middleware/auth.middleware.js";
import { usersPrisma } from "../utils/prisma/index.js";
>>>>>>> Stashed changes

const router = express.Router();

const cashSchema = Joi.object({
  cash: Joi.number().integer().min(0).required(),
});

router.patch("/users/cash", authMiddleware, async (req, res, next) => {
  try {
<<<<<<< Updated upstream
    const user = req.users;
    const { cash } = await cashSchema.validateAsync(req.body);
    const changedcharacter = await usersPrisma.users.update({
      where: {
        user_id: user.user_id,
      },
=======
    const { user_id } = req.user;
    const { cash } = req.body;
    const updateUserCash = await usersPrisma.users.update({
      where: { user_id },
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      baseCash: `${users.cash} 캐시`,
      currentCash: `캐시`,
=======
      current_cash: `${user.cash}`,
>>>>>>> Stashed changes
    });
  } catch (error) {
    next(error);
  }
});
export default router;
