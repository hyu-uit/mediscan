import { EmergencyAccessScreen } from "@/features/onboarding/emergency-access";
import { useRouter } from "expo-router";

export default function EmergencyAccessPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleEnablePhoneCalls = () => {
    // TODO: Request phone call permission
    router.push("/(onboarding)/default-schedule");
  };

  const handleSkip = () => {
    // Skip phone calls and go to default schedule
    router.push("/(onboarding)/default-schedule");
  };

  return (
    <EmergencyAccessScreen
      onBack={handleBack}
      onEnablePhoneCalls={handleEnablePhoneCalls}
      onSkip={handleSkip}
    />
  );
}
