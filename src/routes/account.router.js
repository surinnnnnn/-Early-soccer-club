import express from "express";
import { usersPrisma } from "../utils/prisma/index.js";
import authMiddleware from "../middleware/auth.middleware.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

//회원가입 API
router.post("/sign-up", async (req, res, next) => {
  try {
    //const validaion = await usersSchema.validateAsync(req.body);
    // const { userid, password, checkpassword, nickname } = validaion;
    const { user_id, password, checkpassword, nickname } = req.body;

    //닉네임 중복 확인
    const isExistNickName = await usersPrisma.users.findFirst({
      where: { nickname },
    });
    if (isExistNickName) {
      return res
        .status(409)
        .json({ errorMessage: "이미 존재하는 이름입니다." });
    }
    //닉네임 글자 제한
    if (nickname.length < 3 && nickname.length > 8) {
      return res
        .status(400)
        .json({ errormessage: "닉네임은 3글자 이상, 8글자 이하여야 합니다." });
    }

    //비밀번호 확인
    if (password !== checkpassword) {
      return res.status(400).json({
        errormessage: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //유저 데이터 저장
    const account = await usersPrisma.users.create({
      data: {
        user_id,
        password: hashedPassword,
        nickname,
        //accountId: account.accountId,
      },
      select: {
        //accountId: true,
        nickname: true,
        cash: true,
      },
    });

    return res
      .status(201)
      .json({ message: "회원가입이 완료되었습니다.", accountData: account });
  } catch (err) {
    next(err);
  }
});

//로그인 API
router.post("/sign-in", async (req, res, next) => {
  try {
    const { user_id, password } = req.body;

    //유저 존재 유무 확인
    const account = await usersPrisma.users.findFirst({
      where: { user_id },
    });
    if (!account) {
      return res
        .status(404)
        .json({ errorMessage: "존재하지 않는 이메일입니다." });
    }

    //비밀번호 확인
    if (!(await bcrypt.compare(password, account.password))) {
      return res
        .status(401)
        .json({ errorMessage: "비밀번호가 일치하지 않습니다." });
    }

    const token = jwt.sign(
      {
        user_id: account.user_id,
      },
      "custom-secret-key",
    );

    res.cookie("authorization", `Bearer ${token}`);
    return res.status(200).json({ message: "로그인에 성공했습니다." });
  } catch (err) {
    next(err);
  }
});

//계정 조회 API
router.get("/user", authMiddleware, async (req, res, next) => {
  const { user_id } = req.user;

  const user = await usersPrisma.users.findFirst({
    where: { user_id},
    select: {
      user_id: true,
      nickname: true,
      createdAt: true,
      cash: true,
    },
  });
  return res.status(200).json({ data: user });
});

export default router;
