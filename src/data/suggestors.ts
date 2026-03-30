import z from "zod";

const CommonSuggestors = Object.freeze({
  Lillith: {
    name: "LillithRosePup",
    discordId: 799319081723232267n,
  },
  Dark: {
    name: "Dark",
    discordId: 1235346205924659312n,
  },
} satisfies z.input<typeof suggestorObjectSchema>);

export const suggestorSchema = z.object({
  name: z.string(),
  discordId: z.bigint(),
});

const suggestorObjectSchema = z.record(z.string(), suggestorSchema);

export default suggestorObjectSchema.parse(CommonSuggestors);
