import poppins from '@fontsource/poppins'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#f3Effe",
        primary: "#090936",
        base: "#232136",
        surface: "#2a273f",
        overlay: "#393552",
        text: "#e0def4",
        "highlight-low": "#2a283e",
        "highlight-med": "#44415a",
        "highlight-high": "#56526e",
        subtle: "#908caa",
        love: "#eb6f92",
        iris: "#c4a7e7"

      },
      fontFamily: {
        sans: ['poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
