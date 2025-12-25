import { ScheduleStatus, ScheduleStatusType } from "@/api/schedule";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { TimeSlotColors, TimeSlotVariant } from "@/constants/theme";
import { Check, Pill } from "lucide-react-native";
import { Text, View } from "react-native";

export interface ScheduleItemCardProps {
  name: string;
  dosage: string;
  instructions?: string;
  time: string;
  status: ScheduleStatusType | null;
  takenAt?: string;
  variant: TimeSlotVariant;
  isNextPending?: boolean;
  onTakeNow?: () => void;
  onSkip?: () => void;
  onMarkAsTaken?: () => void;
}

export function ScheduleItemCard({
  name,
  dosage,
  instructions,
  time,
  status,
  takenAt,
  variant,
  isNextPending = false,
  onTakeNow,
  onSkip,
  onMarkAsTaken,
}: ScheduleItemCardProps) {
  const dosageText = instructions ? `${dosage} • ${instructions}` : dosage;
  const { color, bgColor } = TimeSlotColors[variant];

  return (
    <View
      className={`bg-white dark:bg-neutral-800 rounded-2xl px-4 py-4 mb-3 shadow-xs overflow-hidden ${
        status !== ScheduleStatus.PENDING ? "opacity-40" : ""
      }`}
      style={
        isNextPending
          ? { borderLeftWidth: 4, borderLeftColor: color }
          : undefined
      }
    >
      <View className="flex-row items-center">
        {/* Icon */}
        {status === ScheduleStatus.CONFIRMED ? (
          <View className="w-12 h-12 rounded-xl items-center justify-center mr-4 bg-primary/10">
            <Check size={24} color="#36EC37" />
          </View>
        ) : (
          <View
            className="w-12 h-12 rounded-xl items-center justify-center mr-4"
            style={{ backgroundColor: bgColor }}
          >
            <Pill size={24} color={color} />
          </View>
        )}

        {/* Content */}
        <View className="flex-1">
          <Text
            className="text-base text-neutral-500 dark:text-neutral-100 font-poppins-semibold"
            style={{
              textDecorationStyle: "solid",
              textDecorationColor: "#687076",
              textDecorationLine: "line-through",
            }}
          >
            {name}
          </Text>
          <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins mt-0.5">
            {dosageText}
          </Text>
          {status === ScheduleStatus.CONFIRMED && takenAt && (
            <Text className="text-xs text-green-500 font-poppins-medium mt-1">
              TAKEN AT {takenAt}
            </Text>
          )}
        </View>

        {/* Time Badge */}
        {status === ScheduleStatus.CONFIRMED ? (
          <View className="px-3 py-1.5 rounded-full bg-primary-light">
            <Text className="text-sm font-poppins-semibold text-green-500">
              {time}
            </Text>
          </View>
        ) : (
          <Badge title={time} variant={variant} />
        )}
      </View>

      {/* Action Buttons */}
      {status === ScheduleStatus.PENDING && (
        <View className="flex-row mt-4 gap-3">
          <View className="flex-1">
            <Button variant="outline" size="md" onPress={onSkip}>
              Skip
            </Button>
          </View>
          <View className="flex-1">
            <Button
              variant="primary"
              size="md"
              icon={<Check size={18} color="#171717" />}
              onPress={onTakeNow}
            >
              Take Now
            </Button>
          </View>
        </View>
      )}

      {/* {status === "upcoming" && (
        <View className="flex-row mt-3 items-center border-t border-neutral-100 dark:border-neutral-700 pt-3">
          <View className="flex-1">
            <TouchableOpacity onPress={onSkip} className="items-center">
              <Text className="text-sm text-neutral-500 font-poppins-medium">
                Skip
              </Text>
            </TouchableOpacity>
          </View>
          <View className="h-4 w-px bg-neutral-300 dark:bg-neutral-700" />
          <View className="flex-1">
            <TouchableOpacity onPress={onMarkAsTaken} className="items-center">
              <Text className="text-sm text-primary font-poppins-semibold">
                MARK AS TAKEN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )} */}
    </View>
  );
}
