/*
 * Copyright (c) 2026 Abyssal Fragments
 * SPDX-License-Identifier: MIT
 */

import { Events } from "discord.js";
import { bot } from "./bot";
import { registerInteraction } from "./commands";
import { env } from "bun";
import { registerMessageHandler } from "./messages";

if (!env.TOKEN) throw new Error("No token specified!");

bot.on(Events.ClientReady, () => {
  registerInteraction();
  registerMessageHandler();
});

await bot.login(process.env.TOKEN);
