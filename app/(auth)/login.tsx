import { LoginScreen } from "@/features/auth/login";
import { useRouter } from "expo-router";

export default function LoginRoute() {
  const router = useRouter();

  const handleLogin = () => {
    // Navigate to camera-access screen with returning user flag
    // Returning users skip emergency-access and default-schedule screens
    router.replace({
      pathname: "/(onboarding)/camera-access",
      params: { returning: "true" },
    });
  };

  const handleGoogleLogin = () => {
    // Same navigation for Google login
    router.replace({
      pathname: "/(onboarding)/camera-access",
      params: { returning: "true" },
    });
  };

  const handleForgotPassword = () => {
    // Placeholder: navigate to password recovery
    console.log("Navigate to forgot password");
  };

  const handleSignUp = () => {
    router.push("/(auth)/signup");
  };

  return (
    <LoginScreen
      onLogin={handleLogin}
      onGoogleLogin={handleGoogleLogin}
      onForgotPassword={handleForgotPassword}
      onSignUp={handleSignUp}
    />
  );
}
