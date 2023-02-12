import { Bot } from "../deps.ts";
const token = Deno.env.get("TOKEN");

if (typeof token === "undefined") {
  throw new Error("No token found!");
}

const bot = new Bot(token);

export { bot };
