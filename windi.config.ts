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
        white: '#FFFFFF',
        pink: '#FC3FAF',
        green: '#36EBF0',
        gray20: '#F9FAFC',
        gray40: '#ECEDF1',
      },
      textColor: {
        primary: '#6F41FF',
        white: colors.white,
        grey: '#151515',
        grey80: '#646D84',
        grey60: '#B0B5C1',
      },
      colors: {
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ['Open-Sans', 'Segoe UI', 'sans-serif'],
        semibold: ['Open-Sans-SemiBold', 'Segoe UI', 'sans-serif'],
        bold: ['Open-Sans-Bold', 'Segoe UI', 'sans-serif'],
        extrabold: ['Open-Sans-ExtraBold', 'Segoe UI', 'sans-serif'],
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: '#6F41FF',
        secondary: 'rgba(111,65,255, 0.2)',
        danger: '#e3342f',
        grey60: '#B0B5C1',
        gray100: '#383F47',
        gray40: '#ECEDF1',
      }),
      placeholder: {
        primary: '#6F41FF',
        white: colors.white,
        grey: '#151515',
        grey80: '#646D84',
        grey60: '#B0B5C1',
      }
    },
  },

  extract: {
    include: ['./src/**/*.{vue,html,jsx,tsx,astro,mdx,pug}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [typographyPlugin, formsPlugin],
})
