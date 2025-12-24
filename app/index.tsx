import { Redirect } from "expo-router";

export default function Index() {
  // TODO: Check if user has completed onboarding
  const hasCompletedOnboarding = true;

  if (hasCompletedOnboarding) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Redirect href="/(onboarding)" />;
}
