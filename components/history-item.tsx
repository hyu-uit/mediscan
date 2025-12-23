import { Pill, X } from "lucide-react-native";
import { Text, View } from "react-native";

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
    badgeBg: "#DCFCE7",
    badgeText: "#16A34A",
    iconBg: "#DCFCE7",
    iconColor: "#22C55E",
    lineColor: "#22C55E",
    Icon: Pill,
    timePrefix: "Taken at",
  },
  missed: {
    label: "MISSED",
    badgeBg: "#FEE2E2",
    badgeText: "#DC2626",
    iconBg: "#FEE2E2",
    iconColor: "#EF4444",
    lineColor: "#EF4444",
    Icon: X,
    timePrefix: "Scheduled",
  },
  late: {
    label: "LATE",
    badgeBg: "#FEF3C7",
    badgeText: "#D97706",
    iconBg: "#FEF3C7",
    iconColor: "#F59E0B",
    lineColor: "#F59E0B",
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

  return (
    <View style={{ flexDirection: "row" }}>
      {/* Timeline */}
      <View style={{ alignItems: "center", width: 40 }}>
        {/* Icon */}
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: config.iconBg,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconComponent size={18} color={config.iconColor} />
        </View>
        {/* Line */}
        {!isLast && (
          <View
            style={{
              flex: 1,
              width: 2,
              backgroundColor: "#E5E7EB",
              marginVertical: 4,
            }}
          />
        )}
      </View>

      {/* Card */}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderRadius: 16,
          padding: 16,
          marginLeft: 12,
          marginBottom: isLast ? 0 : 12,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* Content */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 16,
              color: "#171717",
              fontFamily: "Poppins_600SemiBold",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#6B7280",
              fontFamily: "Poppins_400Regular",
              marginTop: 2,
            }}
          >
            {dosage} • {config.timePrefix} {time}
          </Text>
        </View>

        {/* Status Badge */}
        <View
          style={{
            backgroundColor: config.badgeBg,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: 11,
              fontFamily: "Poppins_600SemiBold",
              color: config.badgeText,
            }}
          >
            {config.label}
          </Text>
        </View>
      </View>
    </View>
  );
}
