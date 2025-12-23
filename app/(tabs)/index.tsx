import { HomeScreen } from "@/features/home";

export default function HomeTab() {
  const handleUploadFromGallery = () => {
    // TODO: Open image picker
    console.log("Upload from Gallery pressed");
  };

  const handleNotificationPress = () => {
    // TODO: Navigate to notifications
    console.log("Notification pressed");
  };

  return (
    <HomeScreen
      onUploadFromGallery={handleUploadFromGallery}
      onNotificationPress={handleNotificationPress}
    />
  );
}
