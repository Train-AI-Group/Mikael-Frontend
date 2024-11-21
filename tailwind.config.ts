import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultTheme,
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#D72B00",
        orange: "#FF5900",
        icon: "#5D5D5D",
      },
      fontSize: {
        step: "20px",
        title: "36px",
        "5xl": "48px",
        description: "20px",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, #D72B00 0%, #FF5900 100%)",
      },
      boxShadow: {
        card: "7px 8px 12.3px rgba(0, 0, 0, 0.13)",
      },
    },
  },
  plugins: [],
}

export default config
