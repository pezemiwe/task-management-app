import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const colors = {
  purple: "#635fc7",
  lightPurple: "#a8a4ff",
  dark: "#000112",
  gray10: "#20212c",
  gray20: "#2b2c37",
  gray30: "#3e3f4e",
  gray40: "#828fa3",
  gray50: "#e4ebfa",
  gray60: "#f4f7fd",
  gray70: "rgba(130, 143, 163, 0.25)",
  white: "#ffffff",
  darkRed: "#ea5555",
  lightRed: "#ff9898",
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    colors: colors,
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
