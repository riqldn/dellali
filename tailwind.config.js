/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B90000",
        secondary: "#F10000",
        white: "#F9F9F9",
        black: "#090909",
      },
      lineHeight: {
        looser: "150%",
        loose: "140%",
        reg: "130%",
        tight: "110%",
        tighter: "100%",
        tightest: "95%",
        xtra: "90%",
      },
      letterSpacing: {
        xtra: "-0.04rem",
        tight: "-0.02rem",
        reg: "0rem",
      },
      fontSize: {
        "sm": "0.75rem",
        "md": "1.125rem",
        "lg": "2.5rem",
        "xl": "3rem",
        "2xl": "2.5rem",
        "3xl": "8rem",
        "4xl": "10rem",
      },
      fontFamily: {
        rockstar: ["var(--font-rockstar)"],
        instrument: ["var(--font-instrument)"],
      },
    },
  },
  plugins: [],
};
