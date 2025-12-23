import { DailyProgressCard } from "@/components/daily-progress-card";
import { Header } from "@/components/header";
import {
  ScheduleItemCard,
  ScheduleItemStatus,
} from "@/components/schedule-item-card";
import { WeekDaySelector } from "@/components/week-day-selector";
import { TimeSlotVariant } from "@/constants/theme";
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
  status: ScheduleItemStatus;
  takenAt?: string;
}

// Mock data for schedule
const INITIAL_SCHEDULE: ScheduleItemData[] = [
  {
    id: "1",
    name: "Amoxicillin",
    dosage: "500mg",
    instructions: "Take with food",
    time: "8:00 AM",
    period: "morning",
    variant: "morning",
    status: "taken",
    takenAt: "8:15 AM",
  },
  {
    id: "2",
    name: "Vitamin D",
    dosage: "1000IU",
    instructions: "Once daily with lunch",
    time: "1:00 PM",
    period: "afternoon",
    variant: "afternoon",
    status: "pending",
  },
  {
    id: "3",
    name: "Atorvastatin",
    dosage: "20mg",
    instructions: "Before bed",
    time: "9:00 PM",
    period: "evening",
    variant: "night",
    status: "upcoming",
  },
];

interface ScheduleScreenProps {
  onNotificationPress?: () => void;
}

export function ScheduleScreen({ onNotificationPress }: ScheduleScreenProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [schedule, setSchedule] = useState(INITIAL_SCHEDULE);

  const dosesTaken = schedule.filter((item) => item.status === "taken").length;
  const totalDoses = schedule.length;

  // Find the first non-completed item (pending or upcoming)
  const firstPendingId = schedule.find(
    (item) => item.status === "pending" || item.status === "upcoming"
  )?.id;

  const handleTakeNow = (id: string) => {
    setSchedule((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "taken" as ScheduleItemStatus,
              takenAt: new Date().toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              }),
            }
          : item
      )
    );
  };

  const handleSkip = (id: string) => {
    // For now, just log - in real app would mark as skipped
    console.log("Skipped:", id);
  };

  const handleMarkAsTaken = (id: string) => {
    handleTakeNow(id);
  };

  // Group schedule items by period
  const morningItems = schedule.filter((item) => item.period === "morning");
  const afternoonItems = schedule.filter((item) => item.period === "afternoon");
  const eveningItems = schedule.filter((item) => item.period === "evening");

  const renderSection = (title: string, items: ScheduleItemData[]) => {
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
            takenAt={item.takenAt}
            variant={item.variant}
            isNextPending={item.id === firstPendingId}
            onTakeNow={() => handleTakeNow(item.id)}
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
        <Header userName="Sarah" onNotificationPress={onNotificationPress} />

        {/* Week Day Selector */}
        <WeekDaySelector
          selectedDate={selectedDate}
          onDaySelect={setSelectedDate}
        />

        {/* Daily Progress Card */}
        <DailyProgressCard dosesTaken={dosesTaken} totalDoses={totalDoses} />

        {/* Schedule Sections */}
        <View className="px-6">
          {renderSection("Morning", morningItems)}
          {renderSection("Afternoon", afternoonItems)}
          {renderSection("Evening", eveningItems)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
