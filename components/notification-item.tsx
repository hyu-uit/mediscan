import { Colors } from "@/constants/theme";
import { Check, Pill, X } from "lucide-react-native";
import { Text, useColorScheme, View } from "react-native";

export type NotificationStatus = "taken" | "missed" | "pending";

export interface NotificationItemProps {
  id: string;
  medicineName: string;
  dosage: string;
  instructions?: string;
  status: NotificationStatus;
  time: string; // Relative time like "2h ago", "Yesterday"
  isLast?: boolean;
  opacity?: number;
}

const STATUS_CONFIG = {
  taken: {
    iconBg: Colors.neutral[100],
    iconBgDark: "rgba(115, 115, 115, 0.2)",
    iconColor: Colors.icon.muted,
    Icon: Check,
  },
  missed: {
    iconBg: Colors.status.errorLight,
    iconBgDark: "rgba(239, 68, 68, 0.2)",
    iconColor: Colors.status.error,
    Icon: X,
  },
  pending: {
    iconBg: Colors.primaryLight,
    iconBgDark: "rgba(255, 209, 220, 0.2)",
    iconColor: Colors.primaryBright,
    Icon: Pill,
  },
} as const;

export function NotificationItem({
  medicineName,
  dosage,
  instructions,
  status,
  time,
  isLast = false,
  opacity = 1,
}: NotificationItemProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const config = STATUS_CONFIG[status];
  const IconComponent = config.Icon;

  const subtitle = instructions ? `${dosage} • ${instructions}` : dosage;

  return (
    <View
      className={`flex-row items-start bg-white dark:bg-neutral-800 rounded-2xl p-4 ${
        !isLast ? "mb-3" : ""
      } ${status === "missed" ? "border-l-2 border-error" : ""} `}
      style={{ opacity: opacity }}
    >
      {/* Icon */}
      <View
        className="w-10 h-10 rounded-full items-center justify-center mr-3"
        style={{
          backgroundColor: isDark ? config.iconBgDark : config.iconBg,
        }}
      >
        <IconComponent size={20} color={config.iconColor} />
      </View>

      {/* Content */}
      <View className="flex-1">
        <Text className="text-base text-neutral-900 dark:text-neutral-100 font-poppins-semibold">
          {medicineName}
        </Text>
        <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins mt-0.5">
          {subtitle}
        </Text>
      </View>

      {/* Time */}
      <Text
        className={`text-md ${
          status === "pending"
            ? "dark:text-primary text-primary-bright"
            : "text-neutral-400 dark:text-neutral-500"
        } font-poppins-semibold`}
      >
        {time}
      </Text>
    </View>
  );
}
