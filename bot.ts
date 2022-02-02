import { Bot } from "./deps.ts";

const token = Deno.env.get("TOKEN");

if (typeof token === "undefined") {
    throw new Error("No token found!")
}

const bot = new Bot(token);

bot.on("message", (ctx) => ctx.reply("Hi there!"));

export default bot;
