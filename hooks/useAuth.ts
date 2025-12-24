import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Alert } from "react-native";

import { login, register } from "@/api/auth.api";
import { useAuthStore } from "@/stores/auth-store";

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
    onSuccess: (data) => {
      setAuth(data.user, data.token);
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
