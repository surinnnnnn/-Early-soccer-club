import express from 'express';
import {PrismaClient} from '../../prisma/generated/gameDataClient/index.js';
import jwt from 'jsonwebtoken';



const router = express.Router();
const prisma = new PrismaClient();

const verifToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if(!token) {
        
        return res.status(403).json({message :'사용자 인증이 필요합니다.'});
    }
    try  {
        cosnt decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodoe;
        next();
    } catch (error) {
        return res.status(401).json({message : '유효하지 않은 인증값 입니다.'});
    }
};
//선수뽑기

router.post('/agent/gacha', async (req, res) => {
    try {
       const {agent_id} = req.body;
        // 모든 선수 호출 추가가능한부분 스탯 몇이상 뽑기등 확장 가능
       const player = await gameDataClient.player.findMany();

       if(player.length === 0) {
        return res.status(404).json ({
            message : '선수가 없습니다',
        });
       }
       //랜덤으로 선택
       const randomIndex = Math.floor(Math.random()* player.length);
       const drawnPlayer = player[randomIndex];
       
       //뽑은 선수 저장
       const agentgacha = await prisma.agent.create ({
        data : {
            agentname: drawnPlayer.name,
            agent_id: agent_id,
            attack: drawnPlayer.attack,
            defense: drawnPlayer.defense,
            speed: drawnPlayer.speed,
       },
});
// 성공
res.status(200).json({
    
    message: `${drawnPlayer.name} 선수를 뽑았습니다`,
    data : agentgacha,

});
    } catch (error) {
        res.status(500).json({
            message : '선수뽑기에 실패하였습니다.',
            error : error.message,
        });
    }
});
export default router;