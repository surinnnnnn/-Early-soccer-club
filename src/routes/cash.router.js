import express from 'express';
import authMiddleware from "../middlewares/auth.middleware.js";
import {usersprisma} from "../utils/Prisma/index.js";
import jwt from 'jsonwebtoken';

const router = express.Router();

router.patch('/users/cash', authMiddleware, async (req, res, next)=>{
    try{
        const user = req.users;
        const {cash} = await cashSchema.validateAsync(req.body);
        const changeduser = await usersprisma.users.update({
            where:{
                accountId: user.accountId
            },
            data:{
                cash: {increment: cash},
            },
        });

        return res.status(200).json({
            message: `${cash} 캐시가 구매되었습니다.`,
            baseCash: `${user.cash} 캐시`,
            currentCash: `${changeduser.cash}캐시`,
        });
    }catch(error){
        next(error);
    }
});
export default router;