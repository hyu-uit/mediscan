import { ScheduleItemDto, ScheduleStatusType } from "@/api/schedule";
import { Header } from "@/components/header";
import { ScheduleItemCard } from "@/components/schedule-item-card";
import { WeekDaySelector } from "@/components/week-day-selector";
import { TimeSlotVariant } from "@/constants/theme";
import { useSchedulesByDate } from "@/hooks/useSchedule";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type TimePeriod = "morning" | "afternoon" | "evening";

interface ScheduleItemData {
  id: string;
  name: string;
  dosage: string;
  instructions?: string;
  time: string;
  period: TimePeriod;
  variant: TimeSlotVariant;
  status: ScheduleStatusType;
  takenAt?: string;
}

interface ScheduleScreenProps {
  onNotificationPress?: () => void;
}

export function ScheduleScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [schedule, setSchedule] = useState(INITIAL_SCHEDULE);

  const { data: schedules } = useSchedulesByDate(selectedDate.toISOString());

  // const dosesTaken = schedule.filter((item) => item.status === "taken").length;
  // const totalDoses = schedule.length;

  // // Find the first non-completed item (pending or upcoming)
  // const firstPendingId = schedule.find(
  //   (item) => item.status === "pending" || item.status === "upcoming"
  // )?.id;

  // const handleTakeNow = (id: string) => {
  //   setSchedule((prev) =>
  //     prev.map((item) =>
  //       item.id === id
  //         ? {
  //             ...item,
  //             status: "taken" as ScheduleItemStatus,
  //             takenAt: new Date().toLocaleTimeString("en-US", {
  //               hour: "numeric",
  //               minute: "2-digit",
  //               hour12: true,
  //             }),
  //           }
  //         : item
  //     )
  //   );
  // };

  const handleSkip = (id: string) => {
    // For now, just log - in real app would mark as skipped
    console.log("Skipped:", id);
  };

  const handleMarkAsTaken = (id: string) => {
    // handleTakeNow(id);
  };

  // Group schedule items by period
  const morningItems = schedules?.schedules.filter(
    (item) => item.variant === "MORNING"
  );
  const noonItems = schedules?.schedules.filter(
    (item) => item.variant === "NOON"
  );
  const afternoonItems = schedules?.schedules.filter(
    (item) => item.variant === "AFTERNOON"
  );
  const eveningItems = schedules?.schedules.filter(
    (item) => item.variant === "NIGHT"
  );
  const beforeSleepItems = schedules?.schedules.filter(
    (item) => item.variant === "BEFORE_SLEEP"
  );

  const renderSection = (title: string, items: ScheduleItemDto[]) => {
    if (items.length === 0) return null;

    return (
      <View className="mb-4">
        <Text className="text-xs text-neutral-500 dark:text-neutral-400 font-poppins-semibold tracking-wider mb-3 uppercase">
          {title}
        </Text>
        {items.map((item) => (
          <ScheduleItemCard
            key={item.id}
            name={item.name}
            dosage={item.dosage}
            instructions={item.instructions}
            time={item.time}
            status={item.status}
            takenAt={""}
            variant={item.variant}
            isNextPending={false}
            // onTakeNow={() => handleTakeNow(item.id)}
            onSkip={() => handleSkip(item.id)}
            onMarkAsTaken={() => handleMarkAsTaken(item.id)}
          />
        ))}
      </View>
    );
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
        <Header />

        {/* Week Day Selector */}
        <WeekDaySelector
          selectedDate={selectedDate}
          onDaySelect={setSelectedDate}
        />

        {/* Daily Progress Card */}
        {/* <DailyProgressCard dosesTaken={dosesTaken} totalDoses={totalDoses} /> */}

        {/* Schedule Sections */}
        <View className="px-6">
          {renderSection("Morning", morningItems || [])}
          {renderSection("Noon", noonItems || [])}
          {renderSection("Afternoon", afternoonItems || [])}
          {renderSection("Evening", eveningItems || [])}
          {renderSection("Before Sleep", beforeSleepItems || [])}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
