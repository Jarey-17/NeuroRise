import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neulis: ["Neulis Cursive", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1FAEE1",
        secondary: "#578045",
        neutral: "#EFE6DD",
      },
    },
  },
} satisfies Config;
