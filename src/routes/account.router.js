import express from 'express';
import {usersprisma} from "../utils/Prisma/index.js";
import authMiddleware from '../middlewares/auth.middleware.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

//회원가입 API
router.post('api/sign-up', authMiddleware, async(req,res,next)=>{
    try{
        const validaion = await usersSchema.validateAsync(req.body);
        const{userid, password, checkpassword, nickname} = validaion;

//닉네임 중복 확인
        const isExistNickName = await usersprisma.users.findFirst({
        where: { nickname},
    });
    if(isExistNickName){
        return res.status(409).json({errorMessage : '이미 존재하는 이름입니다.'});
    }
    //닉네임 글자 제한
    if(nickname.length < 3 && nickname.length > 8){
        return res.status(400).json({errormessage : "닉네임은 3글자 이상, 8글자 이하여야 합니다."});
    }

  //비밀번호 확인
  if(password !== checkpassword){
    return res.status(400).json({errormessage : "비밀번호와 비밀번호 확인이 일치하지 않습니다."});
}

    const hashedPassword = await bcrypt.hash(password, 10);

    //유저 데이터 저장
    const account = await usersprisma.users.create({
        data:{
            userid,
            password: hashedPassword,
            nickname,
            accountId: account.accountId,
        },
        select:{
            accountId: true,
            nickname: true,
            cash: true,
        }
    })

    return res
    .status(201)
    .json({ message: '회원가입이 완료되었습니다.', accountData: account});
     } catch (err) {
        next(err);
     }
});

//로그인 API
router.post('/api/sign-in',authMiddleware, async (req, res, next) => {
    try{
        const validaion = await usersSchema.validateAsync(req.body);
        const {userid, password} = validaion;

    //유저 존재 유무 확인
    const account = awiat.usersprisma.users.findFirst({
        where:{userid},
    });
    if(!account){
        return res.status(404).json({errorMessage: '존재하지 않는 이메일입니다.'});
    }

    //비밀번호 확인
    if(!(await bcrypt.compare(password, account.password))){
        return res.status(401).json({errorMessage:'비밀번호가 일치하지 않습니다.'});
    }

    const token = jwt.sign({
        accountId: account.accountId
    },
    'custom-secret-key',
    );

    res.cookie('authorization', `Bearer ${token}`);
    return res.status(200).json({message: '로그인에 성공했습니다.'});
}catch (err) {
  next(err);
}
});

//계정 조회 API
router.get('api/user', authMiddleware, async(req, res, next)=> {
    const {userId} = req.users;

    const user = await usersprisma.users.findFirst({
        where: { userId: +userId },
        select: {
            userId: true,
            nickname: true,
            createdAt: true,
            cash: true,
        },
    });
    return res.status(200).json({data: user});
})

export default router;
