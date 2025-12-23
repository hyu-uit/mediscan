import { WelcomeScreen } from "@/components/onboarding/welcome";
import { useRouter } from "expo-router";

export default function WelcomePage() {
  const router = useRouter();

  const handleStartScanning = () => {
    router.push("/camera-access");
  };

  const handleSignIn = () => {
    // TODO: Navigate to sign-in screen
    console.log("Sign In pressed");
  };

  return (
    <WelcomeScreen
      onStartScanning={handleStartScanning}
      onSignIn={handleSignIn}
    />
  );
}
