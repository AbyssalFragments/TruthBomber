import { env } from "bun";
import { Client, REST } from "discord.js";

export const bot = new Client({
  intents: [],
});

export const rest = new REST().setToken(env.TOKEN);
