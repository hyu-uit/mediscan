import { EmergencyAccessScreen } from "@/components/onboarding/emergency-access";
import { useRouter } from "expo-router";

export default function EmergencyAccessPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleEnablePhoneCalls = () => {
    // TODO: Request phone call permission
    // For now, navigate to tabs
    router.push("/(tabs)");
  };

  const handleSkip = () => {
    // Skip phone calls and go to main app
    router.push("/(tabs)");
  };

  return (
    <EmergencyAccessScreen
      onBack={handleBack}
      onEnablePhoneCalls={handleEnablePhoneCalls}
      onSkip={handleSkip}
    />
  );
}
