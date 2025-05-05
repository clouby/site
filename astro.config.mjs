// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import { remarkReadingTime } from "./src/libs/remark-reading-time.mjs";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog/": "/",
  },

  site: "https://cloub.dev",
  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
    },
    remarkPlugins: [remarkReadingTime],
  },

  prefetch: {
    prefetchAll: true,
  },

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Geist",
        cssVariable: "--font-geist",
      },
      {
        provider: fontProviders.google(),
        name: "Geist Mono",
        cssVariable: "--font-geist-mono",
      },
    ],
  },

  adapter: vercel({
    imageService: true,
    devImageService: "sharp",
  }),
});
