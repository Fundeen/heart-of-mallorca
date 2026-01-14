import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        terracotta: {
          DEFAULT: "hsl(var(--terracotta))",
          light: "hsl(var(--terracotta-light))",
          dark: "hsl(var(--terracotta-dark))",
        },
        eggplant: {
          120: "hsl(var(--eggplant-120))",
          100: "hsl(var(--eggplant-100))",
          80: "hsl(var(--eggplant-80))",
          75: "hsl(var(--eggplant-75))",
          55: "hsl(var(--eggplant-55))",
          40: "hsl(var(--eggplant-40))",
          25: "hsl(var(--eggplant-25))",
          10: "hsl(var(--eggplant-10))",
          DEFAULT: "hsl(var(--eggplant-100))",
        },
        orange: {
          120: "hsl(var(--orange-120))",
          100: "hsl(var(--orange-100))",
          80: "hsl(var(--orange-80))",
          70: "hsl(var(--orange-70))",
          DEFAULT: "hsl(var(--orange-100))",
        },
        cream: {
          120: "hsl(var(--cream-120))",
          100: "hsl(var(--cream-100))",
          80: "hsl(var(--cream-80))",
          40: "hsl(var(--cream-40))",
          25: "hsl(var(--cream-25))",
          10: "hsl(var(--cream-10))",
          DEFAULT: "hsl(var(--cream))",
          dark: "hsl(var(--cream-dark))",
        },
        gray: {
          40: "hsl(var(--gray-40))",
          25: "hsl(var(--gray-25))",
          10: "hsl(var(--gray-10))",
        },
        navy: "hsl(var(--navy))",
        golden: "hsl(var(--golden))",
      },
      fontFamily: {
        serif: ["StratosBold", "Georgia", "serif"],
        sans: ["StratosRegular", "system-ui", "sans-serif"],
        "stratos-light": ["StratosLight", "sans-serif"],
        "stratos-medium": ["StratosMedium", "sans-serif"],
        "stratos-bold": ["StratosBold", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "calc(var(--radius) - 2px)",
        none: "0",
        "2xl": "8px",
        "3xl": "12px",
      },
      boxShadow: {
        '3xl': '0px 32px 64px -12px rgba(56, 27, 42, 0.14)',
        '2xl': '0px 24px 48px -12px rgba(56, 27, 42, 0.18)',
        'xl': '0px 20px 24px -4px rgba(56, 27, 42, 0.08), 0px 8px 8px -4px rgba(56, 27, 42, 0.03)',
        'l': '0px 12px 16px -4px rgba(56, 27, 42, 0.08), 0px 4px 6px -2px rgba(56, 27, 42, 0.03)',
        'm': '0px 4px 8px -2px rgba(56, 27, 42, 0.1), 0px 2px 4px -2px rgba(56, 27, 42, 0.06)',
        's': '0px 1px 3px rgba(56, 27, 42, 0.1), 0px 1px 2px rgba(56, 27, 42, 0.06)',
        'xs': '0px 1px 2px rgba(56, 27, 42, 0.05)',
        'dimension': '0px 4px 4px rgba(102, 51, 78, 0.05)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--terracotta) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--terracotta) / 0.5)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-left": "fade-in-left 0.6s ease-out forwards",
        "fade-in-right": "fade-in-right 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;