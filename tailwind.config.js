/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ll: {
          primaryGreen: "#495E57",
          primaryYellow: "#F4CE14",
          secondarySalmon: "#EE9972",
          secondaryTan: "FBDABB",
          highlightGray: "EDEFEE",
          highlightBlack: "#333333",
        },
      },
      fontFamily: {
        sans: ["var(--font-markazi)"],
        mono: ["var(--font-karla)"],
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
