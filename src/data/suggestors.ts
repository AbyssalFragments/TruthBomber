/*
 * Copyright (c) 2026 Abyssal Fragments
 * SPDX-License-Identifier: MIT
 */

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
  Jayden: {
    name: "Jayden_G420",
    discordId: 271775950365130753n,
  },
  Ruminis: {
    name: "Ruminis",
    discordId: 197289380761567233n,
  },
} satisfies z.input<typeof suggestorObjectSchema>);

export const suggestorSchema = z.object({
  name: z.string(),
  discordId: z.bigint(),
});

const suggestorObjectSchema = z.record(z.string(), suggestorSchema);

type Suggestors = {
  [K in keyof typeof CommonSuggestors]: z.output<typeof suggestorSchema>;
};

export default suggestorObjectSchema.parse(CommonSuggestors) as Suggestors;
