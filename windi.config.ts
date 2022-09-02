import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import typographyPlugin from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: false, // or 'media' or 'class'

  attributify: true,
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {},
  },
  extract: {
    include: ['./src/**/*.{vue,html,jsx,tsx,astro}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [typographyPlugin, formsPlugin],
})
