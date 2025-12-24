import { CameraAccessScreen } from "@/features/onboarding/camera-access";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function CameraAccessPage() {
  const router = useRouter();
  const { returning } = useLocalSearchParams<{ returning?: string }>();

  const handleBack = () => {
    router.back();
  };

  const handleEnableCamera = () => {
    // TODO: Request camera permission
    // Pass returning flag to next screen
    router.push({
      pathname: "/(onboarding)/notification-access",
      params: returning ? { returning: "true" } : {},
    });
  };

  const handleTypeManually = () => {
    // TODO: Navigate to manual prescription entry
    router.push("/(tabs)");
  };

  return (
    <CameraAccessScreen
      onBack={handleBack}
      onEnableCamera={handleEnableCamera}
      onTypeManually={handleTypeManually}
    />
  );
}
