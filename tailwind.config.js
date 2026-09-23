/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF5E9",
          dark: "#F3E9D4",
        },
        espresso: {
          DEFAULT: "#2E1D14",
          light: "#4A3324",
        },
        gold: {
          DEFAULT: "#C79A3E",
          dark: "#A97F2E",
          light: "#E4C878",
        },
        blush: "#DE9A85",
        ink: "#221510",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        card: "0 12px 30px -12px rgba(46, 29, 20, 0.25)",
      },
      borderRadius: {
        pill: "999px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
