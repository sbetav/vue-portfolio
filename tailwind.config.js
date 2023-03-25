module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#00b5e8",
        primaryTransparent: "rgba(12, 196, 247, 0.15)",
        bgDark: "#000c1c",
        bgDarkTransparent: "rgba(0, 12, 28, 0.7)",
        bgDarkSecondary: "#001938",
        bgLight: "#f1f5f9",
        bgLightTransparent: "rgba(255, 255, 255, 0.7)",
        bgLightSecondary: "#ffff",
      },
      keyframes: {
        menuSlideIn: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0)" },
        },
        menuSlideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(200%)" },
        },
        pulseRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(4px)" },
          "100%": { transform: "translateX(0)" },
        },

        radiusMorph: {
          "0%": {  borderRadius: "56% 44% 42% 58% / 51% 55% 45% 49%" },
          "25%": { borderRadius: "41% 59% 36% 64% / 61% 55% 45% 39%" },
          "50%": { borderRadius: "59% 41% 53% 47% / 46% 48% 52% 54%" },
          "75%": { borderRadius: "49% 51% 38% 62% / 58% 51% 49% 42%" },
          "100%": { borderRadius: "56% 44% 42% 58% / 51% 55% 45% 49%" },
        },
      },
      animation: {
        menuSlideIn: "menuSlideIn 0.6s ease-out",
        menuSlideOut: "menuSlideOut 0.6s ease-in",
        pulseRight: "pulseRight 1.5s ease-in-out infinite",
        radiusMorph: "radiusMorph 8s infinite",
      },
    },
  },
  plugins: [],
};
