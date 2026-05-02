/*
 * Copyright (c) 2026 Abyssal Fragments
 * SPDX-License-Identifier: MIT
 */

import { Events } from "discord.js";
import { bot } from "./bot";
import nukes, { CommonTags } from "./data/nukes";
import { randomFromArray } from "./utils";

export function registerMessageHandler() {
  bot.on(Events.MessageCreate, async (msg) => {
    if (
      msg.channel.isSendable() &&
      CommonTags.some((tag) => msg.content === tag)
    ) {
      const nuke = randomFromArray(
        nukes.filter((i) => i.meta.tags.includes(msg.content)),
      );
      const lines: string[] = [];
      if (nuke.meta.caption) lines.push(nuke.meta.caption);
      lines.push(nuke.link);
      try {
        await msg.reply({ content: lines.join("\n") });
      } catch {
        /* empty */
      }
    }
  });
}
