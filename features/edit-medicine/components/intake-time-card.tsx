import { TimeSlotColors } from "@/constants/theme";
import { Pencil, Trash2 } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { IntakeTimeTypeValue } from "../types";
import { getTimeSlotIcon, getTimeSlotName } from "../utils";

interface IntakeTimeCardProps {
  time: string;
  type: IntakeTimeTypeValue;
  onEdit: () => void;
  onDelete: () => void;
  isDark: boolean;
}

export function IntakeTimeCard({
  time,
  type,
  onEdit,
  onDelete,
  isDark,
}: IntakeTimeCardProps) {
  const colors = TimeSlotColors[type];

  return (
    <View
      className="flex-row items-center bg-white dark:bg-neutral-800 rounded-2xl px-4 py-4"
      style={{
        borderWidth: 1,
        borderColor: isDark ? "#404040" : "#E5E5E5",
      }}
    >
      {/* Icon */}
      <View
        className="w-12 h-12 rounded-xl items-center justify-center mr-4"
        style={{ backgroundColor: colors.bgColor }}
      >
        {getTimeSlotIcon(type, colors.color)}
      </View>

      {/* Time and Type */}
      <View className="flex-1">
        <Text
          className="text-lg font-poppins-bold"
          style={{ color: colors.color }}
        >
          {time}
        </Text>
        <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins">
          {getTimeSlotName(type)}
        </Text>
      </View>

      {/* Edit Button */}
      <TouchableOpacity
        onPress={onEdit}
        className="w-10 h-10 items-center justify-center"
        activeOpacity={0.7}
      >
        <Pencil size={18} color={isDark ? "#9CA3AF" : "#6B7280"} />
      </TouchableOpacity>

      {/* Delete Button */}
      <TouchableOpacity
        onPress={onDelete}
        className="w-10 h-10 items-center justify-center"
        activeOpacity={0.7}
      >
        <Trash2 size={18} color={isDark ? "#9CA3AF" : "#6B7280"} />
      </TouchableOpacity>
    </View>
  );
}
