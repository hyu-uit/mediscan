import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Time slot types
export type TimeSlotId =
  | "MORNING"
  | "NOON"
  | "AFTERNOON"
  | "NIGHT"
  | "BEFORE_SLEEP";

// Default colors matching TimeSlotColors in theme.ts
const DEFAULT_COLORS: Record<TimeSlotId, string> = {
  MORNING: "#EA580C",
  NOON: "#D97706",
  AFTERNOON: "#0EA5E9",
  NIGHT: "#6366F1",
  BEFORE_SLEEP: "#3B5F8A",
};

// Helper to compute 20% opacity background from hex color
export function hexToRgba(hex: string, alpha: number): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Compute a light background color (20% opacity blend with white)
export function computeBgColor(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "#FFFFFF";
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  // Blend with white at 20% opacity
  const blendR = Math.round(r * 0.2 + 255 * 0.8);
  const blendG = Math.round(g * 0.2 + 255 * 0.8);
  const blendB = Math.round(b * 0.2 + 255 * 0.8);
  return `#${blendR.toString(16).padStart(2, "0")}${blendG
    .toString(16)
    .padStart(2, "0")}${blendB.toString(16).padStart(2, "0")}`.toUpperCase();
}

interface TimeSlotColorValue {
  color: string;
  bgColor: string;
}

interface ColorState {
  colors: Record<TimeSlotId, string>;
  isHydrated: boolean;
  setTimeSlotColor: (slotId: TimeSlotId, color: string) => void;
  getTimeSlotColor: (slotId: TimeSlotId) => TimeSlotColorValue;
  resetToDefaults: () => void;
  setHydrated: (hydrated: boolean) => void;
}

export const useColorStore = create<ColorState>()(
  persist(
    (set, get) => ({
      colors: { ...DEFAULT_COLORS },
      isHydrated: false,

      setTimeSlotColor: (slotId: TimeSlotId, color: string) => {
        set((state) => ({
          colors: {
            ...state.colors,
            [slotId]: color,
          },
        }));
      },

      getTimeSlotColor: (slotId: TimeSlotId): TimeSlotColorValue => {
        const color = get().colors[slotId] || DEFAULT_COLORS[slotId];
        return {
          color,
          bgColor: computeBgColor(color),
        };
      },

      resetToDefaults: () => {
        set({ colors: { ...DEFAULT_COLORS } });
      },

      setHydrated: (hydrated: boolean) => {
        set({ isHydrated: hydrated });
      },
    }),
    {
      name: "color-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        colors: state.colors,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);

// Hook to get a specific time slot color with computed background
export function useTimeSlotColor(slotId: TimeSlotId): TimeSlotColorValue {
  const color = useColorStore((state) => state.colors[slotId]);
  return {
    color: color || DEFAULT_COLORS[slotId],
    bgColor: computeBgColor(color || DEFAULT_COLORS[slotId]),
  };
}

// Get all time slot colors (for use outside of React components)
export function getAllTimeSlotColors(): Record<TimeSlotId, TimeSlotColorValue> {
  const colors = useColorStore.getState().colors;
  return {
    MORNING: {
      color: colors.MORNING,
      bgColor: computeBgColor(colors.MORNING),
    },
    NOON: { color: colors.NOON, bgColor: computeBgColor(colors.NOON) },
    AFTERNOON: {
      color: colors.AFTERNOON,
      bgColor: computeBgColor(colors.AFTERNOON),
    },
    NIGHT: { color: colors.NIGHT, bgColor: computeBgColor(colors.NIGHT) },
    BEFORE_SLEEP: {
      color: colors.BEFORE_SLEEP,
      bgColor: computeBgColor(colors.BEFORE_SLEEP),
    },
  };
}
