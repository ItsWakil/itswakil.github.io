import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// IMPORTANT: Update `site` to your GitHub Pages URL before deploying.
// - User/organization page (username.github.io):  site: "https://username.github.io"
// - Project page (username.github.io/repo):        site: "https://username.github.io/repo",
//                                                    base: "/repo"
export default defineConfig({
  site: "https://your-username.github.io",
  // base: "/your-repo-name", // uncomment + set this if deploying as a project page
  integrations: [sitemap()],
});
