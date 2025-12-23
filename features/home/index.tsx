import { ScheduleItem } from "@/components/schedule-item";
import { Bell, ImagePlus, ScanLine } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Get time-based greeting
function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning,";
  if (hour >= 12 && hour < 17) return "Good Afternoon,";
  return "Good Evening,";
}

// Time slot colors matching default schedule
const TIME_SLOT_COLORS = {
  morning: { color: "#EA580C", bgColor: "#FFEDD5" },
  noon: { color: "#D97706", bgColor: "#FEF3C7" },
  afternoon: { color: "#0EA5E9", bgColor: "#E0F2FE" },
  night: { color: "#6366F1", bgColor: "#EEF2FF" },
  beforeSleep: { color: "#57534E", bgColor: "#F5F5F4" },
};

// Mock data for today's schedule
const MOCK_SCHEDULE = [
  {
    id: "1",
    name: "Amoxicillin",
    dosage: "500mg",
    instructions: "Take with food",
    time: "8:00 AM",
    ...TIME_SLOT_COLORS.morning,
  },
  {
    id: "2",
    name: "Vitamin D",
    dosage: "1000IU",
    instructions: "Once daily",
    time: "12:00 PM",
    ...TIME_SLOT_COLORS.noon,
  },
];

interface HomeScreenProps {
  onTapToScan?: () => void;
  onUploadFromGallery?: () => void;
  onNotificationPress?: () => void;
}

export function HomeScreen({
  onTapToScan,
  onUploadFromGallery,
  onNotificationPress,
}: HomeScreenProps) {
  const greeting = getGreeting();
  const remainingMeds = MOCK_SCHEDULE.length;

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
        <View className="flex-row items-center justify-between px-6 pt-4 mb-8">
          <View className="flex-row items-center">
            {/* Avatar */}
            <View className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 items-center justify-center mr-3">
              <Text className="text-lg font-poppins-semibold text-neutral-500 dark:text-neutral-400">
                S
              </Text>
            </View>
            {/* Greeting */}
            <View>
              <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins">
                {greeting}
              </Text>
              <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold">
                Sarah
              </Text>
            </View>
          </View>

          {/* Notification Bell */}
          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 items-center justify-center shadow-xs"
            onPress={onNotificationPress}
          >
            <Bell size={20} color="#171717" />
          </TouchableOpacity>
        </View>

        {/* Scan Prescription Section */}
        <View className="px-6 mb-8">
          <Text className="text-2xl text-center text-neutral-900 dark:text-neutral-100 font-poppins-bold mb-1">
            Scan Prescription
          </Text>
          <Text className="text-sm text-center text-neutral-500 dark:text-neutral-400 font-poppins mb-4">
            Capture a new prescription to set reminders
          </Text>

          {/* Tap to Scan Card */}
          <TouchableOpacity
            className="items-center justify-center py-8 mb-3 rounded-2xl bg-white dark:bg-neutral-800"
            style={{
              borderWidth: 2,
              borderColor: "#36EC37",
              borderStyle: "dashed",
            }}
            onPress={onTapToScan}
          >
            <View className="w-16 h-16 rounded-2xl bg-primary-light items-center justify-center mb-3">
              <ScanLine size={32} color="#36EC37" />
            </View>
            <Text className="text-xl text-neutral-900 dark:text-neutral-100 font-poppins-bold mb-1">
              Tap to Scan
            </Text>
            <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins-medium text-center px-8">
              Use your camera to capture prescription details automatically
            </Text>
          </TouchableOpacity>

          {/* Upload from Gallery Button */}
          <TouchableOpacity
            className="flex-row items-center justify-center bg-white dark:bg-neutral-800 rounded-2xl py-4 shadow-xs"
            onPress={onUploadFromGallery}
          >
            <ImagePlus size={20} color="#171717" />
            <Text className="text-base text-neutral-900 dark:text-neutral-100 font-poppins-semibold ml-2">
              Upload from Gallery
            </Text>
          </TouchableOpacity>
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
              color={item.color}
              bgColor={item.bgColor}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
