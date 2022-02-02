import bot from "./bot.ts";

import { serve, webhookCallback } from "./deps.ts";

const handleUpdate = webhookCallback(bot, "std/http");

serve(async (req) => {
  const path = new URL(req.url).pathname;

  if (req.method == "POST") {
    try {
      return await handleUpdate(req);
    } catch (err) {
      console.error(err);
      return new Response();
    }
  }

  if (req.method == "GET") {
    await bot.api.setWebhook("https://bot.deno.uz/")
    return Response.redirect("https://t.me/denonentbot", 302)
  }

  // return new Response.redirect("https://t.me/denonentbot", 302);
});
