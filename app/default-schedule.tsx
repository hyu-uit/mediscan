import { DefaultScheduleScreen } from "@/features/onboarding/default-schedule";
import { useAuth } from "@/hooks/useAuth";
import { router } from "expo-router";

export default function DefaultSchedulePage() {
  const { user } = useAuth();

  const handleBack = () => {
    router.back();
  };

  const handleSaveConfiguration = (schedule: Record<string, boolean>) => {
    // TODO: Save schedule to user settings API
    console.log("Saved schedule:", schedule);
    router.back();
  };

  // Map user settings to initial values
  const initialValues = user?.settings
    ? {
        MORNING: user.settings.morningTime,
        NOON: user.settings.noonTime,
        AFTERNOON: user.settings.afternoonTime,
        NIGHT: user.settings.nightTime,
        BEFORE_SLEEP: user.settings.beforeSleepTime,
      }
    : undefined;

  return (
    <DefaultScheduleScreen
      onBack={handleBack}
      onSaveConfiguration={handleSaveConfiguration}
      initialValues={initialValues}
      mode="settings"
    />
  );
}
