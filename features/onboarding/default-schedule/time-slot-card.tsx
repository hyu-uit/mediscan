import { TimeSlotId, useTimeSlotColor } from "@/stores/color-store";
import {
  Bed,
  CloudSun,
  MoonStar,
  Palette,
  Sun,
  Sunrise,
} from "lucide-react-native";
import {
  Pressable,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

// Legacy interface for backwards compatibility
export interface TimeSlot {
  id: string;
  name: string;
  time: string;
  icon: React.ReactNode;
  bgColor: string;
  defaultEnabled: boolean;
}

interface TimeSlotCardProps {
  slotId: TimeSlotId;
  name: string;
  displayTime: string;
  onPress?: () => void;
  onColorPress?: () => void;
}

// Render icon based on slot ID
function SlotIcon({ slotId, color }: { slotId: TimeSlotId; color: string }) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  // Use lighter color in dark mode for BEFORE_SLEEP
  const iconColor = isDark && slotId === "BEFORE_SLEEP" ? "#6A8FB8" : color;

  switch (slotId) {
    case "MORNING":
      return <Sunrise size={24} color={iconColor} />;
    case "NOON":
      return <Sun size={24} color={iconColor} />;
    case "AFTERNOON":
      return <CloudSun size={24} color={iconColor} />;
    case "NIGHT":
      return <MoonStar size={24} color={iconColor} />;
    case "BEFORE_SLEEP":
      return <Bed size={24} color={iconColor} />;
    default:
      return <Sun size={24} color={iconColor} />;
  }
}

export function TimeSlotCard({
  slotId,
  name,
  displayTime,
  onPress,
  onColorPress,
}: TimeSlotCardProps) {
  // Get stored color for this slot
  const { color, bgColor } = useTimeSlotColor(slotId);

  return (
    <Pressable
      className="flex-row items-center bg-white dark:bg-neutral-800 rounded-2xl px-4 py-4 mb-3 shadow-xs active:opacity-80"
      onPress={onPress}
    >
      {/* Icon with dynamic background color */}
      <View
        className="w-12 h-12 rounded-xl items-center justify-center mr-4"
        style={{ backgroundColor: bgColor }}
      >
        <SlotIcon slotId={slotId} color={color} />
      </View>

      {/* Name */}
      <Text className="flex-1 text-base text-neutral-900 dark:text-neutral-100 font-poppins-semibold">
        {name}
      </Text>

      {/* Color Picker Button */}
      {onColorPress && (
        <TouchableOpacity
          onPress={onColorPress}
          className="w-8 h-8 rounded-full items-center justify-center mr-3"
          style={{ backgroundColor: bgColor }}
          activeOpacity={0.7}
        >
          <Palette size={16} color={color} />
        </TouchableOpacity>
      )}

      {/* Time */}
      <Text className="text-lg font-poppins-semibold" style={{ color }}>
        {displayTime}
      </Text>
    </Pressable>
  );
}
