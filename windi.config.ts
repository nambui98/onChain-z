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
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',

    heading1: 'font-sans font-semibold text-4xl text-left uppercase align-middle break-all',
    heading2: 'font-sans font-semibold text-3xl text-left uppercase align-middle break-all',
    title: 'font-sans text-2xl text-left uppercase align-middle break-all',
    'reading-content': 'leading-relaxed font-sans break-all',
  },

  extract: {
    include: ['./src/**/*.{vue,html,jsx,tsx,astro,mdx,pug}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [typographyPlugin, formsPlugin],
})
