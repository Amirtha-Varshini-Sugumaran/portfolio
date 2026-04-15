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
        onyx: "#131316",
        shadow: "#1c1c21",
        carbon: "#26262c",
        graphite: "#2f3037",
        gunmetal: "#393a41",
        steel: "#4b4c52",
        slate: "#5b5c62",
        dim: "#6a6b70",
        mist: "#a7a8b4",
        cloud: "#d3d4d9",
        whiteish: "#f8f8fa"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)",
        card: "0 8px 24px rgba(0,0,0,0.22)",
        lift: "0 16px 40px rgba(0,0,0,0.28)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
