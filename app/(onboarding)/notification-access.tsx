import { NotificationAccessScreen } from "@/features/onboarding/notification-access";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function NotificationAccessPage() {
  const router = useRouter();
  const { returning } = useLocalSearchParams<{ returning?: string }>();

  const handleBack = () => {
    router.back();
  };

  const handleEnableNotifications = () => {
    // TODO: Request notification permission
    if (returning) {
      // Returning users skip emergency-access and default-schedule
      router.replace("/(tabs)");
    } else {
      router.push("/(onboarding)/emergency-access");
    }
  };

  const handleMaybeLater = () => {
    // Skip notifications and go to main app
    router.replace("/(tabs)");
  };

  return (
    <NotificationAccessScreen
      onBack={handleBack}
      onEnableNotifications={handleEnableNotifications}
      onMaybeLater={handleMaybeLater}
    />
  );
}
