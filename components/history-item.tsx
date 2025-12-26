import { Colors } from "@/constants/theme";
import { Clock, Minus, Pill, X } from "lucide-react-native";
import { Text, useColorScheme, View } from "react-native";

export type HistoryStatus = "confirmed" | "missed" | "late";

export interface HistoryItemProps {
  name: string;
  dosage: string;
  unit: string;
  instructions: string | null;
  scheduledAt: string;
  takenAt: string | null;
  status: HistoryStatus;
  isLast?: boolean;
}

const STATUS_CONFIG = {
  CONFIRMED: {
    label: "CONFIRMED",
    badgeBg: "bg-success-light dark:bg-green-900/30",
    badgeText: "text-green-600 dark:text-green-400",
    iconBg: Colors.status.successLight,
    iconBgDark: "rgba(34, 197, 94, 0.2)",
    iconColor: Colors.status.success,
    Icon: Pill,
    timePrefix: "Taken at",
  },
  MISSED: {
    label: "MISSED",
    badgeBg: "bg-error-light dark:bg-red-900/30",
    badgeText: "text-red-600 dark:text-red-400",
    iconBg: Colors.status.errorLight,
    iconBgDark: "rgba(239, 68, 68, 0.2)",
    iconColor: Colors.status.error,
    Icon: X,
    timePrefix: "Scheduled",
  },
  LATE: {
    label: "LATE",
    badgeBg: "bg-warning-light dark:bg-amber-900/30",
    badgeText: "text-amber-600 dark:text-amber-400",
    iconBg: Colors.status.warningLight,
    iconBgDark: "rgba(245, 158, 11, 0.2)",
    iconColor: Colors.status.warning,
    Icon: Pill,
    timePrefix: "Taken at",
  },
  SKIPPED: {
    label: "SKIPPED",
    badgeBg: "bg-neutral-100 dark:bg-neutral-900/30",
    badgeText: "text-neutral-600 dark:text-neutral-400",
    iconBg: Colors.ui.cardBg,
    iconBgDark: "rgba(107, 114, 128, 0.2)",
    iconColor: Colors.icon.default,
    Icon: Minus,
  },
  PENDING: {
    label: "PENDING",
    badgeBg: "bg-neutral-100 dark:bg-neutral-900/30",
    badgeText: "text-neutral-600 dark:text-neutral-400",
    iconBg: Colors.ui.cardBg,
    iconBgDark: "rgba(107, 114, 128, 0.2)",
    iconColor: Colors.icon.default,
    Icon: Clock,
  },
} as const;

export function HistoryItem({
  name,
  dosage,
  unit,
  instructions,
  scheduledAt,
  takenAt,
  status,
  isLast = false,
}: HistoryItemProps) {
  const config = STATUS_CONFIG[status as keyof typeof STATUS_CONFIG];
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
            {dosage} {unit} • {instructions}
          </Text>
          {scheduledAt && (
            <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins mt-0.5">
              • Scheduled at{" "}
              <Text className="font-poppins-semibold">{scheduledAt}</Text>
            </Text>
          )}
          {takenAt && (
            <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins mt-0.5">
              • Taken at{" "}
              <Text className="font-poppins-semibold">{takenAt}</Text>
            </Text>
          )}
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
