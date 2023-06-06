/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      background: "#b88b50",
      accent: "var(--accent)",
      // 4169E1 Royal Blue
      // 3F00FF Vibrant Indigo
      // brown 4e3727
      // color of guitar body D8B06E

      highlight: "var(--highlight)",
      whiteColor: "var(--whiteColor)",
      whiteColorTran: "rgba(231, 231, 231, 0.9)",
      blackColor: "#000814",
      greyColor: "var(--greyColor)",
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
