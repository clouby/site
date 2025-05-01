// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://cloub.dev",
  integrations: [mdx(), sitemap(), react()],
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Space Grotesk",
        cssVariable: "--font-space-grotesk",
      },
      {
        provider: fontProviders.google(),
        name: "Space Mono",
        cssVariable: "--font-space-mono",
      },
    ],
  },
});
