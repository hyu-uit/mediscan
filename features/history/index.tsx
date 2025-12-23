import { AdherenceCard } from "@/components/adherence-card";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { HistoryItem, HistoryStatus } from "@/components/history-item";
import { PeriodOption, PeriodTabs } from "@/components/period-tabs";
import { StatsRow } from "@/components/stats-row";
import { Upload } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HistoryItemData {
  id: string;
  name: string;
  dosage: string;
  time: string;
  status: HistoryStatus;
}

interface HistoryGroup {
  label: string;
  items: HistoryItemData[];
}

// Mock data
const MOCK_HISTORY: HistoryGroup[] = [
  {
    label: "TODAY, OCT 24",
    items: [
      {
        id: "1",
        name: "Amoxicillin",
        dosage: "500mg",
        time: "8:05 AM",
        status: "confirmed",
      },
      {
        id: "2",
        name: "Vitamin D",
        dosage: "1000IU",
        time: "12:00 PM",
        status: "missed",
      },
    ],
  },
  {
    label: "YESTERDAY, OCT 23",
    items: [
      {
        id: "3",
        name: "Vitamin D",
        dosage: "1000IU",
        time: "12:15 PM",
        status: "late",
      },
      {
        id: "4",
        name: "Amoxicillin",
        dosage: "500mg",
        time: "8:00 AM",
        status: "confirmed",
      },
    ],
  },
];

const PERIOD_DATA = {
  daily: {
    percentage: 85,
    comparison: "+10% vs yesterday",
    taken: 4,
    missed: 1,
  },
  weekly: {
    percentage: 92,
    comparison: "+4% vs last week",
    taken: 14,
    missed: 1,
  },
  monthly: {
    percentage: 88,
    comparison: "+2% vs last month",
    taken: 52,
    missed: 8,
  },
};

export function HistoryScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodOption>("weekly");
  const periodData = PERIOD_DATA[selectedPeriod];

  return (
    <SafeAreaView
      className="flex-1 bg-background dark:bg-neutral-900"
      edges={["top"]}
    >
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header userName="Sarah" />

        {/* Title Row */}
        <View className="px-6 mb-4 flex-row items-center justify-between">
          <View>
            <Text className="text-2xl text-neutral-900 dark:text-neutral-100 font-poppins-bold">
              Intake History
            </Text>
            <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins mt-0.5">
              Track your medication journey
            </Text>
          </View>
          <Button
            variant="outline"
            size="sm"
            icon={<Upload size={14} color="#171717" />}
            onPress={() => {}}
          >
            Export Report
          </Button>
        </View>

        {/* Period Tabs */}
        <View className="px-6 mb-5">
          <PeriodTabs selected={selectedPeriod} onSelect={setSelectedPeriod} />
        </View>

        {/* Adherence Card */}
        <View className="px-6 mb-4">
          <AdherenceCard
            percentage={periodData.percentage}
            comparison={periodData.comparison}
          />
        </View>

        {/* Stats Row */}
        <View className="px-6 mb-6">
          <StatsRow
            takenCount={periodData.taken}
            missedCount={periodData.missed}
          />
        </View>

        {/* History Groups */}
        <View className="pt-2" />
        {MOCK_HISTORY.map((group) => (
          <View key={group.label} className="mb-6">
            <Text className="px-6 text-sm text-neutral-500 font-poppins-bold tracking-wide mb-4">
              {group.label}
            </Text>
            <View className="px-6">
              {group.items.map((item, index) => (
                <HistoryItem
                  key={item.id}
                  name={item.name}
                  dosage={item.dosage}
                  time={item.time}
                  status={item.status}
                  isLast={index === group.items.length - 1}
                />
              ))}
            </View>
          </View>
        ))}

        {/* Bottom Padding */}
        <View className="h-8" />
      </ScrollView>
    </SafeAreaView>
  );
}
