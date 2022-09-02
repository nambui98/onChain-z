// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import WindiCSS from 'vite-plugin-windicss'
import netlify from '@astrojs/netlify/functions'
// import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config

export default defineConfig({
  integrations: [preact()],

  // Set "renderers" to "[]" to disable all default, builtin component support.
  // renderers: [],
  // https://github.com/windicss/vite-plugin-windicss
  vite: {
    plugins: [WindiCSS()],
  },

  output: 'server',
  // adapter: vercel(),
  adapter: netlify(),
})
