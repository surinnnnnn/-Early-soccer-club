import { PrismaClient as gameDataClient } from "../../../prisma/game/generated/gameDataClient/index.js";

export const gamePrisma = new gameDataClient({
  log: ["query", "info", "warn", "error"],
  errorFormat: "pretty",
});

import { PrismaClient as userDataClient } from "../../../prisma/user/generated/userDataClient/index.js";

export const usersPrisma = new userDataClient({
  log: ["query", "info", "warn", "error"],
  errorFormat: "pretty",
});
