import rss from "@astrojs/rss";
import { getPosts } from "../lib/posts";

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: "WakilBlog",
    description: "A quirky little corner of the internet.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: `/posts/${post.id}/`,
    })),
    customData: "<language>en-us</language>",
  });
}
