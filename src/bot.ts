/*
 * Copyright (c) 2026 Abyssal Fragments
 * SPDX-License-Identifier: MIT
 */

import { env } from "bun";
import { Client, IntentsBitField, REST } from "discord.js";

export const bot = new Client({
  intents: [IntentsBitField.Flags.MessageContent],
});

export const rest = new REST().setToken(env.TOKEN);
