/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-high": "#eae7e7",
        "primary-fixed": "#cbe6ff",
        "on-primary-fixed-variant": "#154b6c",
        "on-tertiary-fixed": "#2a1800",
        "primary-container": "#2a5b7d",
        "secondary-container": "#d0e1fb",
        "background": "#fcf9f8",
        "primary-fixed-dim": "#9dccf3",
        "tertiary-container": "#754f14",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed": "#001e30",
        "tertiary": "#5a3800",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "inverse-primary": "#9dccf3",
        "on-secondary": "#ffffff",
        "on-secondary-fixed": "#0b1c30",
        "surface-container-low": "#f6f3f2",
        "surface-container": "#f0eded",
        "on-primary-container": "#a4d2f9",
        "inverse-on-surface": "#f3f0ef",
        "surface": "#fcf9f8",
        "secondary-fixed": "#d3e4fe",
        "inverse-surface": "#313030",
        "on-tertiary-fixed-variant": "#633f03",
        "tertiary-fixed-dim": "#f2bd78",
        "surface-variant": "#e5e2e1",
        "error": "#ba1a1a",
        "outline-variant": "#c1c7ce",
        "primary": "#084364",
        "on-surface": "#1c1b1b",
        "outline": "#72787e",
        "surface-bright": "#fcf9f8",
        "on-surface-variant": "#41474e",
        "on-background": "#1c1b1b",
        "on-primary": "#ffffff",
        "surface-tint": "#336385",
        "on-secondary-fixed-variant": "#38485d",
        "tertiary-fixed": "#ffddb5",
        "surface-dim": "#dcd9d9",
        "on-secondary-container": "#54647a",
        "secondary-fixed-dim": "#b7c8e1",
        "secondary": "#505f76",
        "on-tertiary-container": "#f8c37e",
        "surface-container-highest": "#e5e2e1",
        "on-error-container": "#93000a",
        "on-tertiary": "#ffffff"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "unit-1": "4px",
        "unit-2": "8px",
        "unit-4": "16px",
        "unit-6": "24px",
        "unit-8": "32px",
        "unit-12": "48px",
        "unit-16": "64px",
        "grid-gutter": "24px",
        "grid-margin": "32px",
        "base": "4px"
      },
      fontFamily: {
        "body-md": ["Hanken Grotesk"],
        "metric-lg": ["JetBrains Mono"],
        "body-lg": ["Hanken Grotesk"],
        "headline-xl": ["Hanken Grotesk"],
        "label-mono": ["JetBrains Mono"],
        "headline-md": ["Hanken Grotesk"],
        "body-sm": ["Hanken Grotesk"],
        "headline-lg": ["Hanken Grotesk"]
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "metric-lg": ["20px", { lineHeight: "1.0", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-mono": ["12px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "500" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }]
      },
      keyframes: {
        "hourglass-flip": {
          "0%": { transform: "rotate(0deg)" },
          "45%": { transform: "rotate(0deg)" },
          "55%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(180deg)" }
        },
        "fade-in": {
          "from": { opacity: "0", transform: "translateY(10px)" },
          "to": { opacity: "1", transform: "translateY(0)" }
        },
        "ping-slow": {
          "75%, 100%": { transform: "scale(2)", opacity: "0" }
        }
      },
      animation: {
        "hourglass": "hourglass-flip 6s cubic-bezier(0.77, 0, 0.175, 1) infinite",
        "fade-in": "fadeIn 0.4s ease-out",
        "ping-slow": "ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite"
      }
    }
  },
  plugins: [],
}
