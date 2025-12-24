import { useRouter } from "expo-router";
import { SignupScreen } from "@/features/auth/signup";

export default function SignupRoute() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSignUp = () => {
    // Navigate to camera-access screen with returning user flag
    router.replace({
      pathname: "/(onboarding)/camera-access",
      params: { returning: "true" },
    });
  };

  const handleGoogleSignUp = () => {
    // Same navigation for Google sign up
    router.replace({
      pathname: "/(onboarding)/camera-access",
      params: { returning: "true" },
    });
  };

  const handleLogIn = () => {
    router.back();
  };

  return (
    <SignupScreen
      onBack={handleBack}
      onSignUp={handleSignUp}
      onGoogleSignUp={handleGoogleSignUp}
      onLogIn={handleLogIn}
    />
  );
}

