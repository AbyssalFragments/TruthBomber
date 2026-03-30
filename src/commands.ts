import {
  AttachmentBuilder,
  ChatInputCommandInteraction,
  Events,
  InteractionContextType,
  MessageFlags,
  Routes,
  SlashCommandBuilder,
} from "discord.js";
import { bot, rest } from "./bot";
import { env } from "bun";
import truthNukes from "./data/nukes.ts";
import { randomFromArray } from "./utils";

const commands: {
  builder: SlashCommandBuilder;
  exec: (interaction: ChatInputCommandInteraction) => void;
}[] = [
  {
    builder: new SlashCommandBuilder()
      .setName("truth")
      .setDescription("Fire a truth nuke")
      // friendly fire - use anywhere lmao
      .setContexts(
        InteractionContextType.BotDM,
        InteractionContextType.Guild,
        InteractionContextType.PrivateChannel,
      ),
    async exec(interaction) {
      const nuke = randomFromArray(Object.values(truthNukes));
      const lines: string[] = [];
      if (nuke.meta.caption) lines.push(nuke.meta.caption);
      lines.push(nuke.link);
      await interaction.reply({ content: lines.join("\n") });
    },
  },
];

export async function registerInteraction() {
  await rest.put(Routes.applicationCommands(env.CLIENT_ID), {
    body: commands.map((i) => i.builder.toJSON()),
  });
  console.log("Registered commands");

  bot.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return; // not needed
    const command = commands.find(
      (cmd) => cmd.builder.name === interaction.commandName,
    );
    if (!command)
      return await interaction.reply({
        content: "Could not find that command!",
        flags: MessageFlags.Ephemeral,
      });
    // hand it off
    await command.exec(interaction);
  });
}
