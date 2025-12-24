import { Header } from "@/components/header";
import { ScheduleItem } from "@/components/schedule-item";
import { TimeSlotVariant } from "@/constants/theme";
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
    variant: "MORNING",
  },
  {
    id: "2",
    name: "Vitamin D",
    dosage: "1000IU",
    instructions: "Once daily",
    time: "12:00 PM",
    variant: "NOON",
  },
];

interface HomeScreenProps {
  onNotificationPress?: () => void;
}

export function HomeScreen({ onNotificationPress }: HomeScreenProps) {
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
        <Header userName="Sarah" onNotificationPress={onNotificationPress} />

        {/* Today's Schedule Section */}
        <View className="px-6 mt-4">
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
