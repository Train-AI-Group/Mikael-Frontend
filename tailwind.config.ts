import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"
import forms from "@tailwindcss/forms"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultTheme,
    darkMode: "false",
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#D72B00",
        secondary: "#6E6E6E",
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
  plugins: [forms],
}

export default config
