import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
  output: "server",
  adapter: netlify()
});
