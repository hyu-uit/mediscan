import { Header } from "@/components/header";
import { ScanPreview } from "@/components/scan-preview";
import { ScanTapCard } from "@/components/scan-tap-card";
import { ScheduleItem } from "@/components/schedule-item";
import { TimeSlotVariant } from "@/constants/theme";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock data for today's schedule
const MOCK_SCHEDULE: {
  id: string;
  name: string;
  dosage: string;
  instructions: string;
  time: string;
  variant: TimeSlotVariant;
}[] = [
  {
    id: "1",
    name: "Amoxicillin",
    dosage: "500mg",
    instructions: "Take with food",
    time: "8:00 AM",
    variant: "morning",
  },
  {
    id: "2",
    name: "Vitamin D",
    dosage: "1000IU",
    instructions: "Once daily",
    time: "12:00 PM",
    variant: "noon",
  },
];

interface HomeScreenProps {
  onUploadFromGallery?: () => void;
  onNotificationPress?: () => void;
}

export function HomeScreen({
  onUploadFromGallery,
  onNotificationPress,
}: HomeScreenProps) {
  const [isScanning, setIsScanning] = useState(false);
  const remainingMeds = MOCK_SCHEDULE.length;

  const handleTapToScan = () => {
    setIsScanning(true);
  };

  const handleCapture = (uri: string) => {
    // TODO: Process captured image with OCR
    console.log("Captured image:", uri);
    setIsScanning(false);
  };

  const handleGallery = () => {
    // TODO: Open image picker
    console.log("Gallery pressed");
    onUploadFromGallery?.();
  };

  const handleToggleCancel = () => {
    setIsScanning(false);
  };

  return (
    <SafeAreaView
      className="flex-1 bg-background dark:bg-neutral-900"
      edges={["top"]}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Header userName="Sarah" onNotificationPress={onNotificationPress} />

        {/* Scan Prescription Section */}
        <View className="px-6 mb-8">
          <Text className="text-2xl text-center text-neutral-900 dark:text-neutral-100 font-poppins-bold mb-1">
            {isScanning ? "Scan New Prescription" : "Scan Prescription"}
          </Text>
          <Text className="text-sm text-center text-neutral-500 dark:text-neutral-400 font-poppins mb-4">
            {isScanning
              ? "Align the document within the frame"
              : "Capture a new prescription to set reminders"}
          </Text>

          {/* Conditional Scan UI */}
          {isScanning ? (
            <ScanPreview
              onCapture={handleCapture}
              onGallery={handleGallery}
              onCancel={handleToggleCancel}
            />
          ) : (
            <ScanTapCard
              onTapToScan={handleTapToScan}
              onUploadFromGallery={onUploadFromGallery}
            />
          )}
        </View>

        {/* Today's Schedule Section */}
        <View className="px-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold">
              Today's Schedule
            </Text>
            <View className="bg-neutral-100 dark:bg-neutral-700 px-3 py-1.5 rounded-full">
              <Text className="text-xs text-neutral-500 dark:text-neutral-400 font-poppins-medium">
                {remainingMeds} Meds Remaining
              </Text>
            </View>
          </View>

          {/* Schedule Items */}
          {MOCK_SCHEDULE.map((item) => (
            <ScheduleItem
              key={item.id}
              name={item.name}
              dosage={item.dosage}
              instructions={item.instructions}
              time={item.time}
              variant={item.variant}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
