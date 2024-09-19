import express from 'express';
import { prisma } from '../utils/prisma/index.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/auth/createTeam', authMiddleware, async (req, res, next) => {
    const { userID, agentID } = req.body;

    const checkID = await prisma.ownedAgents.findFirst({
        where: {
            userID: userID,
            agentID: agentID,
        },
    });

    if (checkID) {
        console.log('보유한 선수입니다.');
        try {
            const AgentCount = await prisma.equippedAgents.count({
                where: {
                    userID: userID,
                },
            });

            if (AgentCount < 3) {
                const newEquippedAgent = await prisma.equippedAgents.create({
                    data: {
                        userID: userID,
                        agentID: agentID,
                    },
                });
                return res.status(201).json({ newEquippedAgent });
            } else {
                return res
                    .status(400)
                    .json({ errorMessage: '팀은 최대 3명까지만 가능합니다.' });
            }
        } catch (error) {
            console.error('오류:', error);
            return res
                .status(500)
                .json({ errorMessage: '서버 오류가 발생했습니다.' });
        }
    } else {
        console.log('새로운 선수입니다.');
        return res
            .status(400)
            .json({ errorMessage: '선수를 보유하지 않았습니다.' });
    }
});

router.delete('/auth/deleteTeam', authMiddleware, async (req, res, next) => {
    const { userID, agentID } = req.body;

    if (!userID || !agentID) {
        return res
            .status(400)
            .json({ errorMessage: 'userID 또는 agentID가 누락되었습니다.' });
    }

    try {
        const existingAgent = await prisma.equippedAgents.findFirst({
            where: {
                userID: userID,
                agentID: agentID,
            },
        });

        if (existingAgent) {
            const deletedAgent = await prisma.equippedAgents.delete({
                where: {
                    userID_agentID: {
                        userID: userID,
                        agentID: agentID,
                    },
                },
            });
            return res.status(200).json({ deletedAgent });
        } else {
            return res
                .status(404)
                .json({ errorMessage: '삭제할 팀원이 존재하지 않습니다.' });
        }
    } catch (error) {
        console.error('오류:', error);
        return res
            .status(500)
            .json({ errorMessage: '서버 오류가 발생했습니다.' });
    }
});

export default router;