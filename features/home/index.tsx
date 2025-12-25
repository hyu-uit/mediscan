import { Header } from "@/components/header";
import { ScheduleItem } from "@/components/schedule-item";
import { useTodaySchedules } from "@/hooks/useSchedule";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HomeScreenProps {
  onNotificationPress?: () => void;
}

export function HomeScreen({ onNotificationPress }: HomeScreenProps) {
  const { data: todaySchedules } = useTodaySchedules();

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
        <Header />

        {/* Today's Schedule Section */}
        <View className="px-6 mt-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold">
              Today's Schedule
            </Text>
            <View className="bg-neutral-100 dark:bg-neutral-700 px-3 py-1.5 rounded-full">
              <Text className="text-xs text-neutral-500 dark:text-neutral-400 font-poppins-medium">
                {todaySchedules?.remainingCount} Meds Remaining
              </Text>
            </View>
          </View>

          {/* Schedule Items */}
          {todaySchedules?.schedules.map((item) => (
            <ScheduleItem
              key={item.id}
              name={item.name}
              dosage={item.dosage}
              unit={item.unit}
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
