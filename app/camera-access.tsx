import { CameraAccessScreen } from "@/features/onboarding/camera-access";
import { useRouter } from "expo-router";

export default function CameraAccessPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleEnableCamera = () => {
    // TODO: Request camera permission
    // Navigate to notification screen
    router.push("/notification-access");
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
