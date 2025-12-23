import { ScheduleScreen } from "@/features/schedule";

export default function SchedulePage() {
  const handleNotificationPress = () => {
    console.log("Notification bell pressed");
    // TODO: Navigate to notifications screen
  };

  return <ScheduleScreen onNotificationPress={handleNotificationPress} />;
}
