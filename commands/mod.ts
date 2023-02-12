import { bot } from "../config/mod.ts"
import start from "./start.ts"
import add from  "./add.ts"

bot.use(start);
bot.use(add);
