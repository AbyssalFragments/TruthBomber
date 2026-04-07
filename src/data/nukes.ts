import z from "zod";
import suggestors, { suggestorSchema } from "./suggestors";

const TheMegaObject = {
  "https://tenor.com/view/true-truth-nuke-super-truth-nova-truth-meme-gif-16889273424352737553":
    {
      tags: "truth",
      suggestor: suggestors.Lillith,
    },
  "https://tenor.com/view/oguri-cap-true-eating-eat-uma-musume-gif-6958309401336282549":
    {
      tags: "truth",
      suggestor: suggestors.Lillith,
    },
  "https://tenor.com/view/morgan-freeman-true-morgan-freeman-true-nodding-gif-13973817878387504960":
    {
      tags: "truth",
      suggestor: suggestors.Lillith,
    },
  "https://tenor.com/view/walter-white-truth-nuke-walter-white-true-breaking-bad-truth-nuke-breaking-bad-true-gif-2370094217877194192":
    {
      tags: "truth",
      caption: "This is not false...",
      suggestor: suggestors.Dark,
    },
  "https://tenor.com/view/true-nuke-ash-baby-squidward-spongebob-gif-10318197618755767412":
    {
      tags: "truth",
      suggestor: suggestors.Dark,
    },
  "https://tenor.com/view/gem-alarm-gem-gemson-gapejak-wholesome-soyjak-gif-27193685":
    {
      suggestor: suggestors.Lillith,
    },
  "https://tenor.com/view/zombies-true-truth-truth-nuke-richtofen-gif-9600806367048332710":
    {
      suggestor: suggestors.Lillith,
      tags: "false",
    },
  "https://tenor.com/view/walter-white-false-nuke-walter-white-false-breaking-bad-false-breaking-bad-false-nuke-gif-11851145952566757188":
    {
      suggestor: suggestors.Lillith,
      tags: "false",
    },
  "https://tenor.com/view/truth-nuke-truth-supernova-false-nuke-false-supernova-false-gif-5457766589162937417":
    {
      suggestor: suggestors.Lillith,
      tags: "false",
    },
  "https://tenor.com/view/toy-freddy-truth-nuke-true-fnaf-2-movie-car-crash-gif-10605118628274388500":
    {
      tags: "truth",
      suggestor: suggestors.Lillith,
    },
  "https://tenor.com/view/iron-lung-markiplier-true-morgan-freeman-true-morgan-freeman-gif-17440395262741494665":
    {
      tags: "truth",
      suggestor: suggestors.Jayden,
    },
  "https://tenor.com/view/true-truth-false-wrong-stan-twitter-gif-18145397122687222458":
    {
      tags: "truth",
      suggestor: suggestors.Lillith,
      caption:
        "🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨🪨",
    },
  "https://tenor.com/view/truth-nuke-truth-nuke-trvth-nvke-big-boss-gif-15944112429945701902":
    {
      tags: "truth",
      suggestor: suggestors.Ruminis,
    },
  "https://gif.fxtwitter.com/tweet_video/HFQ3GBGWsAAAt7X.gif": {
    tags: "truth",
    suggestor: suggestors.Jayden,
  },
} as z.input<typeof schema>;

export const CommonTags = ["truth", "false"] as const;

const tagSchema = z.enum(CommonTags).or(z.string<string & {}>());
export type NukeTag = z.infer<typeof tagSchema>;

const metadataSchema = z.object({
  tags: z
    .union([tagSchema, z.array(tagSchema)])
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
