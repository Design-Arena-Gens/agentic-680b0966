import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f4f7ff",
          100: "#e6edff",
          200: "#c3d4ff",
          300: "#99b4ff",
          400: "#668dff",
          500: "#3d6bff",
          600: "#1b49eb",
          700: "#1336b8",
          800: "#102c92",
          900: "#10256f"
        },
        slate: {
          950: "#0f172a"
        }
      },
      boxShadow: {
        card: "0 20px 45px -20px rgba(15, 23, 42, 0.45)"
      },
      fontFamily: {
        sans: ["'Inter var'", "Inter", "system-ui", "sans-serif"],
        display: ["'Satoshi'", "'Inter var'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
