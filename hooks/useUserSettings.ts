import { UserDto } from "@/api/auth";
import {
  toggleAutomatedCalls,
  toggleDarkMode,
  togglePushNotifications,
} from "@/api/user-settings";
import { useAuthStore } from "@/stores/auth-store";
import { useMutation } from "@tanstack/react-query";

export function useTogglePushNotifications() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: togglePushNotifications,
    onMutate: () => {
      // Optimistically update UI immediately
      if (user?.settings) {
        const updatedUser: UserDto = {
          ...user,
          settings: {
            ...user.settings,
            pushNotifications: !user.settings.pushNotifications,
          },
        };
        setUser(updatedUser);
      }
    },
  });
}

export function useToggleAutomatedCalls() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: toggleAutomatedCalls,
    onMutate: () => {
      // Optimistically update UI immediately
      if (user?.settings) {
        const updatedUser: UserDto = {
          ...user,
          settings: {
            ...user.settings,
            automatedCalls: !user.settings.automatedCalls,
          },
        };
        setUser(updatedUser);
      }
    },
  });
}

export function useToggleDarkMode() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: toggleDarkMode,
    onMutate: () => {
      // Optimistically update UI immediately
      if (user?.settings) {
        const updatedUser: UserDto = {
          ...user,
          settings: {
            ...user.settings,
            darkMode: !user.settings.darkMode,
          },
        };
        setUser(updatedUser);
      }
    },
  });
}
