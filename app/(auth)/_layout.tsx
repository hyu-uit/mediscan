import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#F6F8F6" },
      }}
    >
      <Stack.Screen name="login" />
    </Stack>
  );
}
