import { Pill } from "lucide-react-native";
import { Text, View } from "react-native";

export interface ScheduleItemProps {
  name: string;
  dosage: string;
  instructions?: string;
  time: string;
  color: string;
  bgColor: string;
}

export function ScheduleItem({
  name,
  dosage,
  instructions,
  time,
  color,
  bgColor,
}: ScheduleItemProps) {
  const dosageText = instructions ? `${dosage} • ${instructions}` : dosage;

  return (
    <View className="flex-row items-center bg-white dark:bg-neutral-800 rounded-2xl px-4 py-4 mb-3 shadow-xs">
      {/* Icon */}
      <View
        className="w-12 h-12 rounded-xl items-center justify-center mr-4"
        style={{ backgroundColor: bgColor }}
      >
        <Pill size={24} color={color} />
      </View>

      {/* Content */}
      <View className="flex-1">
        <Text className="text-base text-neutral-900 dark:text-neutral-100 font-poppins-semibold">
          {name}
        </Text>
        <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins mt-0.5">
          {dosageText}
        </Text>
      </View>

      {/* Time Badge */}
      <View
        className="px-3 py-1.5 rounded-full"
        style={{ backgroundColor: bgColor }}
      >
        <Text className="text-sm font-poppins-semibold" style={{ color }}>
          {time}
        </Text>
      </View>
    </View>
  );
}
