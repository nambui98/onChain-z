// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import WindiCSS from 'vite-plugin-windicss'
// @ts-ignore
import netlify from '@astrojs/netlify/functions'
// import vercel from "@astrojs/vercel/serverless"
import '@egjs/preact-flicking/dist/flicking.css'
// // Or, if you have to support IE9
// import "@egjs/preact-flicking/dist/flicking-inline.css";
// import "@egjs/flicking-plugins/dist/flicking-plugins.css";
export default defineConfig({
  integrations: [preact()],

  // Set "renderers" to "[]" to disable all default, builtin component support.
  // renderers: [],
  // https://github.com/windicss/vite-plugin-windicss
  // https://windicss.org/integrations/vite.html
  vite: {
    plugins: [WindiCSS()],
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      external: ['@egjs/preact-flicking'],
    },
    // ssr: {
    //   noExternal: ['package-name'],
    // }
  },

  output: 'server', // https://docs.astro.build/en/guides/server-side-rendering/
  // adapter: vercel(),
  adapter: netlify(),
})
