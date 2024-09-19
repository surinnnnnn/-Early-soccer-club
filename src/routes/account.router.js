import express from 'express';
import {prisma} from '@Prisma/client';

const router = express.Router();

//회원가입 API
router.post('api/sign-up', async(req,res,next)=>{
    try{
        const validaion = await usersSchema.validateAsync(req.body);
        const{userid, password, checkpassword, nickname} = validaion;

//닉네임 중복 확인
        const isExistNickName = await prisma.users.findFirst({
        where: { nickname},
    });
    if(isExistNickName){
        return res.status(409).json({errorMessage : '이미 존재하는 이름입니다.'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [account, character] = await prisma.$transaction(
        async (tx) =>{
            const account = await tx.users.create({
                data:{
                    userid,
                    password: hashedPassword,
                },
                select:{
                    userid:true,
                    nickname:true,
                },
            });
            const character = await tx.character.create({
                data:{
                    AccountId: account.accountId,
                    nickname,
                },
                select: {
                    nickname: true,
                    cash: true,
                },
            });

          return [account, character];
        }
    )
    return res
    .status(201)
    .json({ message: '회원가입이 완료되었습니다.', accountData: account, characterData: character });
     } catch (err) {
        next(err);
     }
});

//로그인 API
router.post('/api/sign-in', async (req, res, next) => {
    try{
        const validaion = await signInSchema.validateAsync(req.body);
        const {userid, password} = validaion;

    //유저 존재 유무 확인
    const account = awiat.prisma.users.findFirst({
        where:{userid},
    });
    if(!account){
        return res.status(404).json({errorMessage: '존재하지 않는 이메일입니다.'});
    }

    //비밀번호 확인
    if(!(await bcrypt.compare(password, account.password))){
        return res.status(401).json({errorMessage:'비밀번호가 일치하지 않습니다.'});
    }

    return res.status(200).json({message: '로그인에 성공했습니다.',
    data: {

    },
});
}catch (err) {
  next(err);
}
});

export default router;