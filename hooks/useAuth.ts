import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

import { login, register } from "@/api/auth";
import { saveFcmToken } from "@/api/user-settings";
import { useAuthStore } from "@/stores/auth-store";
import { getPushToken } from "@/utils/notifications";

export function useRegister() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setAuth(data.user, data.token);
      router.replace({
        pathname: "/(auth)/login",
      });
    },
    onError: (error: Error) => {
      Alert.alert("Registration Failed", error.message);
    },
  });
}

export function useLogin() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      setAuth(data.user, data.token);

      // Save FCM token for push notifications
      try {
        const pushToken = await getPushToken();
        console.log("🔔 FCM Token:", pushToken);
        if (pushToken) {
          await saveFcmToken(pushToken);
        }
      } catch (error) {
        console.error("Failed to save FCM token:", error);
      }

      router.replace({
        pathname: "/(tabs)",
      });
    },
    onError: (error: Error) => {
      Alert.alert("Login Failed", error.message);
    },
  });
}

export function useLogout() {
  const router = useRouter();
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const logout = () => {
    clearAuth();
    router.replace("/(auth)/login");
  };

  return { logout };
}

export function useAuth() {
  const { user, token, isAuthenticated } = useAuthStore();

  return {
    user,
    token,
    isAuthenticated,
  };
}
