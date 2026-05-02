/*
 * Copyright (c) 2026 Abyssal Fragments
 * SPDX-License-Identifier: MIT
 */

import { env } from "bun";
import { Client, GatewayIntentBits, REST } from "discord.js";

export const bot = new Client({
  intents: [GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages],
});

export const rest = new REST().setToken(env.TOKEN);
