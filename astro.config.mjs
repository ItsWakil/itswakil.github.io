import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://itswakil.github.io",
  integrations: [sitemap()],
  markdown: {
    // Code block colors come from --astro-code-* variables in global.css,
    // so highlighting switches between Tokyo Night and Tokyo Night Day.
    shikiConfig: { theme: "css-variables" },
  },
});
