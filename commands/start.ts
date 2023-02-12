import { Composer } from "../deps.ts"

const composer = new Composer()

composer.command('start', async (ctx) => {
    await ctx.reply(`Github: https://github.com/denolanduz`)
})

export default composer;