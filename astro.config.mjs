// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://lovebirds-world.github.io/", // your lowercase username goes here
  base: "/lovebirds-world.online/",
  integrations: [
    tailwind(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
});
