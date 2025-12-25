import { useAuthStore } from "@/stores/auth-store";
import { useColorScheme as useNativeWindColorScheme } from "nativewind";
import { useEffect } from "react";
import { useColorScheme as useSystemColorScheme } from "react-native";

/**
 * Custom hook that returns the color scheme based on user settings.
 * If user has dark mode enabled in settings, returns "dark".
 * Otherwise falls back to system preference.
 * Also syncs NativeWind's color scheme for dark: classes.
 */
export function useColorScheme(): "light" | "dark" {
  const systemColorScheme = useSystemColorScheme();
  const user = useAuthStore((state) => state.user);
  const { setColorScheme } = useNativeWindColorScheme();

  // Determine the effective color scheme
  const effectiveColorScheme =
    user?.settings?.darkMode !== undefined
      ? user.settings.darkMode
        ? "dark"
        : "light"
      : systemColorScheme ?? "light";

  // Sync NativeWind's color scheme when it changes
  useEffect(() => {
    setColorScheme(effectiveColorScheme);
  }, [effectiveColorScheme, setColorScheme]);

  return effectiveColorScheme;
}
