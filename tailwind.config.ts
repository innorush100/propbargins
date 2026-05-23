import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400e",
          900: "#78350f",
        },
        surface: {
          950: "#07090F",
          900: "#0A0E1A",
          800: "#111827",
          700: "#1e2438",
          600: "#2a3249",
        },
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245,158,11,0.15), transparent)",
        "card-gradient": "linear-gradient(135deg, #111827 0%, #0A0E1A 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
