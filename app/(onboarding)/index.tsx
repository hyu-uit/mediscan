import { WelcomeScreen } from "@/features/onboarding/welcome";
import { useRouter } from "expo-router";

export default function WelcomePage() {
  const router = useRouter();

  const handleStartScanning = () => {
    router.push("/(onboarding)/camera-access");
  };

  const handleSignIn = () => {
    router.push("/(auth)/login");
  };

  return (
    <WelcomeScreen
      onStartScanning={handleStartScanning}
      onSignIn={handleSignIn}
    />
  );
}
