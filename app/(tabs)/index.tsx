import { HomeScreen } from "@/features/home";

export default function HomeTab() {
  const handleNotificationPress = () => {
    // TODO: Navigate to notifications
    console.log("Notification pressed");
  };

  return <HomeScreen onNotificationPress={handleNotificationPress} />;
}
