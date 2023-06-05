/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#b88b50",
      secondary: "#957A68",
      background: "#b88b50",
      accent: "#3F00FF",
      accent1: "#f4d45e",
      accent2: "#ef4444",
      accent3: "#0ea5e9",
      // 4169E1 Royal Blue
      // 3F00FF Vibrant Indigo
      // brown 4e3727
      // color of guitar body D8B06E

      primaryDark: "#191919",
      highlight: "#e80000",
      whiteColor: "rgba(231, 231, 231, 1)",
      whiteColorTran: "rgba(231, 231, 231, 0.9)",
      blackColor: "#000814",
      greyColor: "#535353",
      transparent: "transparent",
      boxShadow: "rgba(0,0,0,0.4)",
    },
    fontFamily: {
      mono: ["trade-gothic-next", "sans-serif"],
    },
    extend: {
      fontFamily: {
        "trade-gothic": ["trade-gothic-next", "sans-serif"],
        Gazzetta: ["gazzetta-variable", "sans-serif"],
        verveine: ["verveine", "sans-serif"],
      },
    },
  },
  plugins: [],
};
