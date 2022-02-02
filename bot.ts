import { Bot } from "./deps.ts";
import help from "./help.ts";
const token = Deno.env.get("TOKEN");

if (typeof token === "undefined") {
  throw new Error("No token found!");
}

const bot = new Bot(token);

bot.use(help)

export default bot;
