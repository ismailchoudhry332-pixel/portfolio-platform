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
        background: "#FAFAFA",
        foreground: "#1A1A1A",
        "foreground-muted": "#2A2A2A",
        accent: "#666666",
        "accent-light": "#999999",
        signal: "#4338ca",
        border: "#E5E5E5",
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
