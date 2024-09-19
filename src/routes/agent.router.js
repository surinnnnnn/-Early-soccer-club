const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/api/my_agent', async (req, res) => {
    try {
        const agent = await prisma.agent.findMany();
        res.json(agent);

    } catch(error) {
        console.error(error);
        res.status(500).json({error : '서버 응답 오류'});


    }
});