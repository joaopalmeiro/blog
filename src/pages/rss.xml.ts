import rss from "@astrojs/rss";
import type { APIContext } from "astro";

import { posts } from "../data/posts";

export function GET(context: APIContext): Promise<Response> {
  return rss({
    title: "Patches",
    description: "A tech and gaming blog by João Palmeiro.",
    site: context.site!,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: [
      "<language>en-us</language>",
      `<generator>${context.generator}</generator>`,
      `<atom:link href="${new URL("rss.xml", context.site)}" rel="self" type="application/rss+xml" />`,
    ].join(""),
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.createdAt),
      description: post.description,
      link: `/${post.id}/`,
      author: "joaopalmeiro@proton.me (João Palmeiro)",
    })),
  });
}
