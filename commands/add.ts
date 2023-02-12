import { Composer } from "../deps.ts"

const composer = new Composer()

composer.command('add', async (ctx) =>
    await ctx.reply("Send me 2 numbers to add.\nExample: 2+2")
)

export default composer;