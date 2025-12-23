import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="camera-access" />
      <Stack.Screen name="notification-access" />
      <Stack.Screen name="emergency-access" />
      <Stack.Screen name="default-schedule" />
    </Stack>
  );
}
