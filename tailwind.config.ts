import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        swimlane: {
          csm: "hsl(var(--swimlane-csm))",
          "csm-accent": "hsl(var(--swimlane-csm-accent))",
          deploy: "hsl(var(--swimlane-deploy))",
          "deploy-accent": "hsl(var(--swimlane-deploy-accent))",
          manager: "hsl(var(--swimlane-manager))",
          "manager-accent": "hsl(var(--swimlane-manager-accent))",
        },
        process: {
          box: "hsl(var(--process-box))",
          border: "hsl(var(--process-box-border))",
          hover: "hsl(var(--process-box-hover))",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          muted: "hsl(var(--text-muted))",
        },
        modal: {
          overlay: "hsl(var(--modal-overlay))",
          background: "hsl(var(--modal-background))",
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
      },
      boxShadow: {
        'process': '0 2px 8px hsl(var(--process-box-shadow))',
        'modal': '0 20px 40px hsl(var(--modal-shadow))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
