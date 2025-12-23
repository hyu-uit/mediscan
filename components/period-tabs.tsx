import { Pressable, Text, View } from "react-native";

export type PeriodOption = "daily" | "weekly" | "monthly";

export interface PeriodTabsProps {
  selected: PeriodOption;
  onSelect: (period: PeriodOption) => void;
}

const TABS: { value: PeriodOption; label: string }[] = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
];

export function PeriodTabs({ selected, onSelect }: PeriodTabsProps) {
  return (
    <View className="flex-row bg-[#ECF0F3] dark:bg-neutral-800 rounded-xl p-1">
      {TABS.map((tab) => {
        const isSelected = selected === tab.value;
        return (
          <Pressable
            key={tab.value}
            onPress={() => {
              onSelect(tab.value);
            }}
            className={`flex-1 py-2.5 rounded-lg items-center ${
              isSelected ? "bg-white dark:bg-neutral-700" : ""
            }`}
          >
            <Text
              className={`text-sm font-poppins-semibold ${
                isSelected
                  ? "text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
