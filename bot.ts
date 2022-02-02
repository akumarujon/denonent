import { Bot } from "./deps.ts";

const token: string = Deno.env.get("TOKEN") || "";
const bot = new Bot(token);

bot.on("message", (ctx) => ctx.reply("Hi there!"));

export default bot;
