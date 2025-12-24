import { useAuth } from "@/hooks/useAuth";
import { Redirect } from "expo-router";

export default function Index() {
  const { isAuthenticated } = useAuth();
  // TODO: Check if user has completed onboarding
  const hasCompletedOnboarding = true;

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Redirect href="/(tabs)" />;
}
