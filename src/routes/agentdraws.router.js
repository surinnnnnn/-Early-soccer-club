const express = reqire('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('api/agent', async(req,res) => {
    try {
        const agents = await gameDataClient.agents.findMany();
        res.json(agents);
        } catch(error) {
            console.error(error);
            res.status(500).json({error : '서버 응답 오류'});

        }
});

module.exports = router;