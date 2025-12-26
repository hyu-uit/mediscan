/**
 * Centralized theme colors for the app.
 * All colors should be defined here and used via:
 * - Tailwind CSS classes (configured in tailwind.config.js)
 * - Direct import for inline styles (e.g., icon colors)
 */

import { Platform } from "react-native";

// ============================================
// Primary Brand Colors
// ============================================
export const Colors = {
  // Primary accent color (pink pastel)
  primary: "#FFD1DC",
  primaryBright: "#FF85A2",
  primaryLight: "#FFF0F3",
  primaryMuted: "#FFB6C1",

  // Background colors
  background: "#FAFAFA",
  backgroundWhite: "#FFFFFF",
  backgroundDark: "#1A1517",

  // ============================================
  // Text Colors
  // ============================================
  text: {
    primary: "#171717", // Main text (light mode)
    primaryDark: "#F5F5F5", // Main text (dark mode)
    secondary: "#687076", // Muted text
    secondaryDark: "#9BA1A6", // Muted text (dark mode)
    muted: "#6B7280", // Gray text
    mutedDark: "#9CA3AF", // Muted gray (dark mode)
    placeholder: "#A3A3A3", // Placeholder text
  },

  // ============================================
  // Icon Colors
  // ============================================
  icon: {
    default: "#6B7280",
    muted: "#9CA3AF",
    dark: "#171717",
    light: "#F5F5F5",
  },

  // ============================================
  // Status Colors
  // ============================================
  status: {
    success: "#22C55E",
    successLight: "#DCFCE7",
    successMuted: "#86EFAC",

    error: "#EF4444",
    errorLight: "#FEE2E2",

    warning: "#F59E0B",
    warningLight: "#FEF3C7",

    info: "#3B82F6",
    infoLight: "#DBEAFE",
  },

  // ============================================
  // Neutral Colors
  // ============================================
  neutral: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },

  // ============================================
  // UI Element Colors
  // ============================================
  ui: {
    tabInactive: "#94A3B8",
    toggleTrackOff: "#E5E7EB",
    toggleTrackOn: "#FFB6C1",
    toggleThumb: "#FFFFFF",
    divider: "#E5E7EB",
    cardBg: "#FFF5F7",
    iconBg: "#E2E8F0",
  },
} as const;

// ============================================
// Time Slot Colors (for badges and schedule items)
// ============================================
export const TimeSlotColors = {
  MORNING: { color: "#EA580C", bgColor: "#FFEDD5" },
  NOON: { color: "#D97706", bgColor: "#FEF3C7" },
  AFTERNOON: { color: "#0EA5E9", bgColor: "#E0F2FE" },
  NIGHT: { color: "#6366F1", bgColor: "#EEF2FF" },
  BEFORE_SLEEP: { color: "#1E3A5F", bgColor: "#DBEAFE" },
} as const;

export type TimeSlotVariant = keyof typeof TimeSlotColors;

// ============================================
// Legacy Colors (for backward compatibility)
// Keep these for now but prefer using Colors object
// ============================================
export const LegacyColors = {
  light: {
    text: Colors.text.primary,
    textSecondary: Colors.text.secondary,
    background: Colors.backgroundWhite,
    tint: "#0a7ea4",
    icon: Colors.icon.default,
    tabIconDefault: Colors.icon.default,
    tabIconSelected: "#0a7ea4",
    primary: Colors.primary,
  },
  dark: {
    text: Colors.text.primaryDark,
    textSecondary: Colors.text.secondaryDark,
    background: Colors.backgroundDark,
    tint: Colors.backgroundWhite,
    icon: Colors.icon.muted,
    tabIconDefault: Colors.icon.muted,
    tabIconSelected: Colors.backgroundWhite,
    primary: Colors.primary,
  },
};

// ============================================
// Font Configuration
// ============================================
export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
