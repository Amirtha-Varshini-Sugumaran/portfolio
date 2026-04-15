import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22223b",
        secondary: "#4a4e69",
        accent: "#9a8c98",
        warm: "#c9ada7",
        background: "#f2e9e4",
        "text-dark": "#1a1a1a",
        "text-light": "#ffffff"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(34, 34, 59, 0.10)",
        lift: "0 22px 65px rgba(34, 34, 59, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
