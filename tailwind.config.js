/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

module.exports = {
  content: {
    files: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract
  },
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6E3B95",
      },
    },
  },
  plugins: [
    fluid,
    require('tailwind-scrollbar-hide'),
  ],
};
