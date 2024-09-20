import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import agentPush from "./src/routes/agents.push.router.js";
import account from "./src/routes/account.router.js";

dotenv.config();

const app = express();
const PORT = 3306;

app.use(express.json());
app.use(cookieParser());

app.use("/api", [agentPush]);
app.use("/api", [account]);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
