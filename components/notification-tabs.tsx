import { Text, TouchableOpacity, View } from "react-native";

export type NotificationFilter = "all" | "taken" | "missed";

export interface NotificationTabsProps {
  selected: NotificationFilter;
  onSelect: (filter: NotificationFilter) => void;
}

const TABS: { value: NotificationFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "taken", label: "Taken" },
  { value: "missed", label: "Missed" },
];

export function NotificationTabs({
  selected,
  onSelect,
}: NotificationTabsProps) {
  return (
    <View className="flex-row gap-2">
      {TABS.map((tab) => {
        const isSelected = selected === tab.value;
        return (
          <TouchableOpacity
            key={tab.value}
            onPress={() => onSelect(tab.value)}
            className={`px-5 py-2.5 rounded-full ${
              isSelected
                ? "bg-neutral-900 dark:bg-neutral-100"
                : "bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
            }`}
            activeOpacity={0.7}
          >
            <Text
              className={`text-sm font-poppins-medium ${
                isSelected
                  ? "text-white dark:text-neutral-900"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
