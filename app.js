import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import agentPush from "./src/routes/agents.push.router.js";
<<<<<<< Updated upstream
=======
import account from "./src/routes/account.router.js";
import cash from "./src/routes/cash.router.js";
import allAgent from "./src/routes/all_agents.router.js";
import myAgent from "./src/routes/my_agents.router.js";
import teams from "./src/routes/teams.router.js";
>>>>>>> Stashed changes

dotenv.config();

const app = express();
const PORT = 3306;

app.use(express.json());
app.use(cookieParser());

app.use("/api", [agentPush]);
<<<<<<< Updated upstream
=======
app.use("/api", [account]);
app.use("/api", [cash]);
app.use("/api", [allAgent]);
app.use("/api", [myAgent]);
app.use("/api", [teams]);
>>>>>>> Stashed changes

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
