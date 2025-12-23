import { DefaultScheduleScreen } from "@/features/onboarding/default-schedule";
import { useRouter } from "expo-router";

export default function DefaultSchedulePage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSaveConfiguration = (schedule: Record<string, boolean>) => {
    // TODO: Save schedule to storage
    console.log("Saved schedule:", schedule);
    // Navigate to main app
    router.push("/(tabs)");
  };

  return (
    <DefaultScheduleScreen
      onBack={handleBack}
      onSaveConfiguration={handleSaveConfiguration}
    />
  );
}
