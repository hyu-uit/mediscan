import { Pill, X } from "lucide-react-native";
import { Text, useColorScheme, View } from "react-native";

export type HistoryStatus = "confirmed" | "missed" | "late";

export interface HistoryItemProps {
  name: string;
  dosage: string;
  time: string;
  status: HistoryStatus;
  isLast?: boolean;
}

const STATUS_CONFIG = {
  confirmed: {
    label: "CONFIRMED",
    badgeBg: "bg-green-100 dark:bg-green-900/30",
    badgeText: "text-green-600 dark:text-green-400",
    iconBg: "#DCFCE7",
    iconBgDark: "rgba(34, 197, 94, 0.2)",
    iconColor: "#22C55E",
    Icon: Pill,
    timePrefix: "Taken at",
  },
  missed: {
    label: "MISSED",
    badgeBg: "bg-red-100 dark:bg-red-900/30",
    badgeText: "text-red-600 dark:text-red-400",
    iconBg: "#FEE2E2",
    iconBgDark: "rgba(239, 68, 68, 0.2)",
    iconColor: "#EF4444",
    Icon: X,
    timePrefix: "Scheduled",
  },
  late: {
    label: "LATE",
    badgeBg: "bg-amber-100 dark:bg-amber-900/30",
    badgeText: "text-amber-600 dark:text-amber-400",
    iconBg: "#FEF3C7",
    iconBgDark: "rgba(245, 158, 11, 0.2)",
    iconColor: "#F59E0B",
    Icon: Pill,
    timePrefix: "Taken at",
  },
} as const;

export function HistoryItem({
  name,
  dosage,
  time,
  status,
  isLast = false,
}: HistoryItemProps) {
  const config = STATUS_CONFIG[status];
  const IconComponent = config.Icon;
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View className="flex-row">
      {/* Timeline */}
      <View className="items-center w-10">
        {/* Icon */}
        <View
          className="w-8 h-8 rounded-full items-center justify-center"
          style={{
            backgroundColor: isDark ? config.iconBgDark : config.iconBg,
          }}
        >
          <IconComponent size={18} color={config.iconColor} />
        </View>
        {/* Line */}
        {!isLast && (
          <View className="flex-1 w-0.5 bg-neutral-200 dark:bg-neutral-700 my-1" />
        )}
      </View>

      {/* Card */}
      <View
        className={`flex-1 bg-white dark:bg-neutral-800 rounded-2xl p-4 ml-3 flex-row items-center ${
          !isLast ? "mb-3" : ""
        }`}
      >
        {/* Content */}
        <View className="flex-1">
          <Text className="text-base text-neutral-900 dark:text-neutral-100 font-poppins-semibold">
            {name}
          </Text>
          <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins mt-0.5">
            {dosage} • {config.timePrefix} {time}
          </Text>
        </View>

        {/* Status Badge */}
        <View className={`px-3 py-1.5 rounded-full ${config.badgeBg}`}>
          <Text className={`text-xs font-poppins-semibold ${config.badgeText}`}>
            {config.label}
          </Text>
        </View>
      </View>
    </View>
  );
}
