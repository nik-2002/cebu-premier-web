import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        ocean: "var(--color-ocean)",
        pine: "var(--color-pine)",
        gold: "var(--color-gold)",
        clay: "var(--color-clay)",
        mist: "var(--color-mist)",
        paper: "var(--color-paper)"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(44, 47, 118, 0.12)",
        button: "0 10px 24px rgba(63, 170, 80, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
