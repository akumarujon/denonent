// You might modify this to the correct way to import your `Bot` object.
import bot from "./bot.ts";

import { serve, webhookCallback } from "./deps.ts";

const handleUpdate = webhookCallback(bot, "std/http");

serve(async (req) => {
  if (req.method == "POST") {
    try {
      return await handleUpdate(req);
    } catch (err) {
      console.error(err);
      return new Response();
    }
  }

  if (req.method == "GET") {
    return "https://t.me/denonentbot"
  }

  return new Response();
});
