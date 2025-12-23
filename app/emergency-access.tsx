import { EmergencyAccessScreen } from "@/features/onboarding/emergency-access";
import { useRouter } from "expo-router";

export default function EmergencyAccessPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleEnablePhoneCalls = () => {
    // TODO: Request phone call permission
    // Navigate to default schedule screen
    router.push("/default-schedule");
  };

  const handleSkip = () => {
    // Skip phone calls and go to default schedule
    router.push("/default-schedule");
  };

  return (
    <EmergencyAccessScreen
      onBack={handleBack}
      onEnablePhoneCalls={handleEnablePhoneCalls}
      onSkip={handleSkip}
    />
  );
}
