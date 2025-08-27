import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/hooks/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(240 5.9% 90%)",
        input: "hsl(240 5.9% 90%)",
        ring: "hsl(240 5.9% 10%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(210 25% 7.8431%)",
        primary: {
          DEFAULT: "hsl(155 100% 26.4706%)",
          foreground: "hsl(0 0% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(210 25% 7.8431%)",
          foreground: "hsl(0 0% 100%)",
        },
        muted: "hsl(240 1.9608% 90%)",
      },
      borderRadius: {
        xl: "1rem",
      }
    },
  },
  plugins: [],
} satisfies Config
