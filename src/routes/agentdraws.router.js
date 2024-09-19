const express = reqire('express');
const router = express.Router();
import { usersPrisma } from "../utils/prisma/index.js";

const prisma = new PrismaClient();

const authMiddleware = (req, res, next) => {
    const token = req.headers['autohorization'];

    if (!token) {
        return res.status(403).json({message : '사용자 인증이 필요합니다.'});
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).json({message : '유효하지 않은 인증값 입니다.'});

    }
}

router.get('api/agent', async(req,res) => {
    try {
        const agents = await usersPrisma.agents.findMany();
        res.json(agents);
        } catch(error) {
            console.error(error);
            res.status(500).json({error : '서버 응답 오류'});

        }
});

module.exports = router;