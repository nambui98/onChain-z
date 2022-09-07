import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import typographyPlugin from 'windicss/plugin/typography'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: false, // or 'media' or 'class'

  attributify: true,
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ['Segoe UI', 'sans-serif'],
        serif: ['Cambria', 'serif'],
      },
    },
  },

  extract: {
    include: ['./src/**/*.{vue,html,jsx,tsx,astro,mdx,pug}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [typographyPlugin, formsPlugin],
})
