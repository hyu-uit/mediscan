import { ScheduleStatus, ScheduleStatusType } from "@/api/schedule";
import { Badge, BadgeVariant } from "@/components/badge";
import { TimeSlotId, useTimeSlotColor } from "@/stores/color-store";
import { Pill } from "lucide-react-native";
import { Text, View } from "react-native";

export interface ScheduleItemProps {
  name: string;
  dosage: string;
  unit: string;
  instructions?: string;
  time: string;
  variant: BadgeVariant;
  isUpcoming?: boolean;
  status: ScheduleStatusType | null;
}

export function ScheduleItem({
  name,
  dosage,
  unit,
  instructions,
  time,
  variant,
  isUpcoming = false,
  status,
}: ScheduleItemProps) {
  const dosageText = instructions
    ? `${dosage} ${unit} • ${instructions}`
    : `${dosage} ${unit}`;
  const { color, bgColor } = useTimeSlotColor(variant as TimeSlotId);

  return (
    <View
      className={`flex-row items-center bg-white dark:bg-neutral-800 rounded-2xl px-4 py-4 mb-3 shadow-xs ${
        status !== ScheduleStatus.PENDING ? "opacity-60" : ""
      }`}
    >
      {/* Icon */}
      <View
        className="w-12 h-12 rounded-xl items-center justify-center mr-4"
        style={{ backgroundColor: bgColor }}
      >
        <Pill size={24} color={color} />
      </View>

      {/* Content */}
      <View className="flex-1">
        <Text
          style={
            status !== ScheduleStatus.PENDING
              ? {
                  textDecorationStyle: "solid",
                  textDecorationColor: "#687076",
                  textDecorationLine: "line-through",
                }
              : undefined
          }
          className="text-xl text-neutral-900 dark:text-neutral-100 font-poppins-bold"
        >
          {name}
        </Text>
        <Text className="text-sm text-neutral-400 dark:text-neutral-400 font-poppins-medium mt-1">
          {dosageText}
        </Text>
      </View>

      {/* Time Badge */}
      <Badge title={time} variant={variant} />
    </View>
  );
}
