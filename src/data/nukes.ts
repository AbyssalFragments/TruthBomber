import z from "zod";
import suggestors, { suggestorSchema } from "./suggestors";

const TheMegaObject = {
  "https://tenor.com/view/true-truth-nuke-super-truth-nova-truth-meme-gif-16889273424352737553":
    {
      suggestor: suggestors.Lillith,
    },
  "https://tenor.com/view/oguri-cap-true-eating-eat-uma-musume-gif-6958309401336282549":
    {
      suggestor: suggestors.Lillith,
    },
  "https://tenor.com/view/morgan-freeman-true-morgan-freeman-true-nodding-gif-13973817878387504960":
    {
      suggestor: suggestors.Lillith,
    },
  "https://tenor.com/view/walter-white-truth-nuke-walter-white-true-breaking-bad-truth-nuke-breaking-bad-true-gif-2370094217877194192":
    {
      caption: "This is not false...",
      suggestor: suggestors.Dark,
    },
  "https://tenor.com/view/true-nuke-ash-baby-squidward-spongebob-gif-10318197618755767412":
    {
      suggestor: suggestors.Dark,
    },
} as z.input<typeof schema>;

export enum NukeTag {
  TRUTH,
  FALSE,
}
const metadataSchema = z.object({
  tags: z
    .union([z.enum(NukeTag), z.array(z.enum(NukeTag))])
    .optional()
    .transform((v) => (v === undefined ? [] : Array.isArray(v) ? v : [v])),
  caption: z.string().optional().describe("Will be sent along with the image"),
  suggestor: suggestorSchema,
});

const schema = z
  .record(z.string().describe("The Link"), metadataSchema)
  .transform((obj) =>
    Object.entries(obj).map(([link, meta]) => ({
      link,
      meta,
    })),
  );

export default schema.parse(TheMegaObject);
