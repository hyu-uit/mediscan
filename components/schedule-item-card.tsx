import { ScheduleStatus, ScheduleStatusType } from "@/api/schedule";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Colors, TimeSlotColors, TimeSlotVariant } from "@/constants/theme";
import { AlertCircle, Check, Minus, Pill } from "lucide-react-native";
import { Text, View } from "react-native";

export interface ScheduleItemCardProps {
  name: string;
  dosage: string;
  instructions?: string;
  time: string;
  status: ScheduleStatusType | null;
  takenAt?: string;
  variant: TimeSlotVariant;
  isUpcoming?: boolean;
  onTakeNow?: () => void;
  onSkip?: () => void;
  isMarkingAsTaken?: boolean;
  isSkippingMedication?: boolean;
}

export function ScheduleItemCard({
  name,
  dosage,
  instructions,
  time,
  status,
  takenAt,
  variant,
  isUpcoming = false,
  onTakeNow,
  onSkip,
  isMarkingAsTaken = false,
  isSkippingMedication = false,
}: ScheduleItemCardProps) {
  const dosageText = instructions ? `${dosage} • ${instructions}` : dosage;
  const { color, bgColor } = TimeSlotColors[variant];

  // Status check variables (only check if status is not null)
  const isConfirmed = status !== null && status === ScheduleStatus.CONFIRMED;
  const isMissed = status !== null && status === ScheduleStatus.MISSED;
  const isSkipped = status !== null && status === ScheduleStatus.SKIPPED;
  const isPending = status !== null && status === ScheduleStatus.PENDING;
  const isNotPending = status !== null && status !== ScheduleStatus.PENDING;

  return (
    <View
      className={`bg-white dark:bg-neutral-800 rounded-2xl px-4 py-4 mb-3 shadow-xs overflow-hidden ${
        isNotPending ? "opacity-60" : ""
      }`}
      style={
        isUpcoming ? { borderLeftWidth: 4, borderLeftColor: color } : undefined
      }
    >
      <View className="flex-row items-center">
        {/* Icon */}
        {isConfirmed ? (
          <View className="w-12 h-12 rounded-xl items-center justify-center mr-4 bg-success/10">
            <Check size={24} color={Colors.status.success} />
          </View>
        ) : isMissed ? (
          <View className="w-12 h-12 rounded-xl items-center justify-center mr-4 bg-error/10">
            <AlertCircle size={24} color={Colors.status.error} />
          </View>
        ) : isSkipped ? (
          <View className="w-12 h-12 rounded-xl items-center justify-center mr-4 bg-neutral-400/10">
            <Minus size={24} color={Colors.icon.muted} />
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
            className={`text-xl font-poppins-bold ${
              isNotPending
                ? "text-neutral-400"
                : "text-neutral-900 dark:text-neutral-100"
            }`}
            style={
              isNotPending
                ? {
                    textDecorationStyle: "solid",
                    textDecorationColor: Colors.text.secondary,
                    textDecorationLine: "line-through",
                  }
                : undefined
            }
          >
            {name}
          </Text>
          <Text className="text-sm text-neutral-400 dark:text-neutral-400 font-poppins-medium mt-1">
            {dosageText}
          </Text>
          {isConfirmed && takenAt && (
            <Text className="text-xs text-green-500 font-poppins-semibold mt-1">
              • TAKEN AT {takenAt}
            </Text>
          )}
          {isMissed && (
            <Text className="text-xs text-red-500 font-poppins-semibold mt-1">
              • MISSED
            </Text>
          )}
          {isSkipped && (
            <Text className="text-xs text-neutral-400 font-poppins-semibold mt-1">
              • SKIPPED
            </Text>
          )}
        </View>

        {/* Time Badge */}
        {isConfirmed ? (
          <View className="px-3 py-1.5 rounded-full bg-green-500/10">
            <Text className="text-sm font-poppins-semibold text-green-500">
              {time}
            </Text>
          </View>
        ) : isMissed ? (
          <View className="px-3 py-1.5 rounded-full bg-red-500/10">
            <Text className="text-sm font-poppins-semibold text-red-500">
              {time}
            </Text>
          </View>
        ) : isSkipped ? (
          <View className="px-3 py-1.5 rounded-full bg-neutral-400/10">
            <Text className="text-sm font-poppins-semibold text-neutral-400">
              {time}
            </Text>
          </View>
        ) : (
          <Badge title={time} variant={variant} />
        )}
      </View>

      {/* Action Buttons */}
      {isPending && isUpcoming && (
        <View className="flex-row mt-4 gap-3">
          <View className="flex-1">
            <Button
              variant="outline"
              size="md"
              onPress={onSkip}
              isLoading={isSkippingMedication}
            >
              Skip
            </Button>
          </View>
          <View className="flex-1">
            <Button
              variant="primary"
              size="md"
              icon={<Check size={18} color={Colors.text.primary} />}
              onPress={onTakeNow}
              isLoading={isMarkingAsTaken}
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
