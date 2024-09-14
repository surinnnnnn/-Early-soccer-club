import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3306;

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
