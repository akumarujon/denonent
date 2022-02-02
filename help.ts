import { Composer } from "./deps.ts";

const composer = new Composer();

composer.command('help', async ctx => {
    await ctx.reply(
        'To add numbers, do /add. To multiply numbers, do /multiply.'
    )
})

export default composer