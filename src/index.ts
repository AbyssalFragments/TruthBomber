/*
 * Copyright (c) 2026 Abyssal Fragments
 * SPDX-License-Identifier: MIT
 */

import { Events } from "discord.js";
import { bot } from "./bot";
import { registerInteraction } from "./commands";
import { env } from "bun";

if (!env.TOKEN) throw new Error("No token specified!");

bot.on(Events.ClientReady, () => {
  registerInteraction();
});

await bot.login(process.env.TOKEN);
