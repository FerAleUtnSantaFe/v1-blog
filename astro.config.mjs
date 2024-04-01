import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import auth from "auth-astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://v1-blog-d9knd6s94-fernando-ales-projects.vercel.app/",
  integrations: [tailwind(), icon({
    include: {
      lucide: ["*"]
    }
  }), sitemap(), auth()],
  output: "server",
  adapter: vercel()
});