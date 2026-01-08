import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        foreground: "#FAFAFA",
        "foreground-muted": "#CCCCCC",
        accent: "#888888",
        "accent-light": "#AAAAAA",
        "accent-cyan": "#00FFFF",
        "accent-purple": "#BB86FC",
        border: "#333333",
        "border-light": "#444444",
        "carolean-red": "#D31E40",
        "carolean-navy": "#2C3E6E",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: ["var(--font-newsreader)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        prose: "680px",
        layout: "1200px",
      },
      letterSpacing: {
        tight: "-0.015em",
      },
    },
  },
  plugins: [],
};

export default config;
