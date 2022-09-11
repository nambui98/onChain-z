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
      backgroundColor: {
        primary: '#6F41FF',
      },
      textColor: {
        primary: '#6F41FF',
        white: colors.white,
        grey: '#151515',
      },
      colors: {
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ['Segoe UI', 'sans-serif'],
        serif: ['Cambria', 'serif'],
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: '#6F41FF',
        secondary: 'rgba(111,65,255, 0.2)',
        danger: '#e3342f',
      }),
    },
  },

  extract: {
    include: ['./src/**/*.{vue,html,jsx,tsx,astro,mdx,pug}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [typographyPlugin, formsPlugin],
})
