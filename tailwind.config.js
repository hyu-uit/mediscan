/**
 * Tailwind CSS Configuration
 * Colors are synced with constants/theme.ts - update both when changing colors
 */

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
        // Primary brand colors (sync with Colors.primary*)
        primary: "#FFD1DC",
        "primary-bright": "#FF85A2",
        "primary-light": "#FFF0F3",
        "primary-muted": "#FFB6C1",

        // Background colors (sync with Colors.background*)
        background: "#FFF8F9",

        // Status colors (sync with Colors.status.*)
        success: {
          DEFAULT: "#22C55E",
          light: "#DCFCE7",
          muted: "#86EFAC",
        },
        error: {
          DEFAULT: "#EF4444",
          light: "#FEE2E2",
        },
        warning: {
          DEFAULT: "#F59E0B",
          light: "#FEF3C7",
        },
        info: {
          DEFAULT: "#3B82F6",
          light: "#DBEAFE",
        },

        // UI colors (sync with Colors.ui.*)
        "tab-inactive": "#94A3B8",
        "toggle-track-off": "#E5E7EB",
        "toggle-track-on": "#FFB6C1",

        // Badge time slot colors (sync with TimeSlotColors)
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
