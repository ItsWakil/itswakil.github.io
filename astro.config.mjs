import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://blog.wakil.ink",
  integrations: [sitemap()],
  // gives markdown images a srcset instead of shipping the full-size photo
  image: { layout: "constrained" },
  markdown: {
    // Code block colors come from --astro-code-* variables in global.css,
    // so highlighting switches between Rosé Pine and Rosé Pine Dawn.
    shikiConfig: { theme: "css-variables" },
  },
});
