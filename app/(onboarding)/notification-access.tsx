import { NotificationAccessScreen } from "@/features/onboarding/notification-access";
import { useRouter } from "expo-router";

export default function NotificationAccessPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleEnableNotifications = () => {
    // TODO: Request notification permission
    router.push("/(onboarding)/emergency-access");
  };

  const handleMaybeLater = () => {
    // Skip notifications and go to main app
    router.push("/(tabs)");
  };

  return (
    <NotificationAccessScreen
      onBack={handleBack}
      onEnableNotifications={handleEnableNotifications}
      onMaybeLater={handleMaybeLater}
    />
  );
}
