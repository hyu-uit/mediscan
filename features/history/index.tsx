import { StatsPeriod, StatsPeriodType } from "@/api/medication-logs";
import { AdherenceCard } from "@/components/adherence-card";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { HistoryItem } from "@/components/history-item";
import { PeriodTabs } from "@/components/period-tabs";
import { StatsRow } from "@/components/stats-row";
import {
  useMedicationLogsHistory,
  useMedicationLogsStats,
} from "@/hooks/useMedicationLogs";
import { Upload } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HistoryScreen() {
  const [selectedPeriod, setSelectedPeriod] =
    useState<StatsPeriodType>("weekly");

  const { data: medicationLogsStats } = useMedicationLogsStats(selectedPeriod);
  const { data: history } = useMedicationLogsHistory(selectedPeriod);

  // Flatten all items for daily view
  const allItems = history?.groups.flatMap((group) => group.items) ?? [];

  return (
    <SafeAreaView
      className="flex-1 bg-background dark:bg-neutral-900"
      edges={["top"]}
    >
      {/* Header */}
      <Header />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
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
            percentage={medicationLogsStats?.adherence ?? 0}
            comparison={
              medicationLogsStats
                ? `${medicationLogsStats.adherenceChange > 0 ? "+" : ""}${
                    medicationLogsStats.adherenceChange
                  }% ${medicationLogsStats.comparisonLabel}`
                : ""
            }
          />
        </View>

        {/* Stats Row */}
        <View className="px-6 mb-6">
          <StatsRow
            takenCount={medicationLogsStats?.taken ?? 0}
            missedCount={medicationLogsStats?.missed ?? 0}
          />
        </View>

        {/* History List */}
        <View className="pt-2" />
        {selectedPeriod === StatsPeriod.DAILY ? (
          // Daily: Flat list without sections
          <View className="px-6">
            {allItems.map((item, index) => (
              <HistoryItem
                key={item.id}
                name={item.name}
                dosage={item.dosage}
                unit={item.unit}
                instructions={item.instructions}
                scheduledAt={item.scheduledAt}
                takenAt={item.takenAt}
                status={item.status}
                isLast={index === allItems.length - 1}
              />
            ))}
          </View>
        ) : (
          // Weekly/Monthly: Grouped by date
          history?.groups.map((group) => (
            <View key={group.date} className="mb-6">
              <Text className="px-6 text-sm text-neutral-500 font-poppins-bold tracking-wide mb-4">
                {group.label.toUpperCase()}
              </Text>
              <View className="px-6">
                {group.items.map((item, index) => (
                  <HistoryItem
                    key={item.id}
                    name={item.name}
                    dosage={item.dosage}
                    unit={item.unit}
                    instructions={item.instructions}
                    scheduledAt={item.scheduledAt}
                    takenAt={item.takenAt}
                    status={item.status}
                    isLast={index === group.items.length - 1}
                  />
                ))}
              </View>
            </View>
          ))
        )}

        {/* Bottom Padding */}
        <View className="h-32" />
      </ScrollView>
    </SafeAreaView>
  );
}
