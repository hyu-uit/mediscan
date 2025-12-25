/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./features/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4CD964",
        "primary-light": "#F3FEF5",
        background: "#F6F8F6",
        // Badge time slot colors
        badge: {
          morning: "#EA580C",
          "morning-bg": "#FFEDD5",
          noon: "#D97706",
          "noon-bg": "#FEF3C7",
          afternoon: "#0EA5E9",
          "afternoon-bg": "#E0F2FE",
          night: "#6366F1",
          "night-bg": "#EEF2FF",
          "before-sleep": "#1E3A5F",
          "before-sleep-bg": "#DBEAFE",
        },
      },
      fontFamily: {
        poppins: ["Poppins_400Regular"],
        "poppins-medium": ["Poppins_500Medium"],
        "poppins-semibold": ["Poppins_600SemiBold"],
        "poppins-bold": ["Poppins_700Bold"],
      },
    },
  },
  plugins: [],
};
