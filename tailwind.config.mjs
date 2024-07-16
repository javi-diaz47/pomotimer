import poppins from '@fontsource/poppins'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(240, 71.43%, 12.35%)",
      },
      fontFamily: {
        sans: ['poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
