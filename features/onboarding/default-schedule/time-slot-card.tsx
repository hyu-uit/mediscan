import { Pressable, Text, View } from "react-native";

export interface TimeSlot {
  id: string;
  name: string;
  time: string;
  icon: React.ReactNode;
  bgColor: string;
  defaultEnabled: boolean;
}

interface TimeSlotCardProps {
  slot: TimeSlot;
  displayTime?: string;
  onPress?: () => void;
}

export function TimeSlotCard({
  slot,
  displayTime,
  onPress,
}: TimeSlotCardProps) {
  return (
    <Pressable
      className="flex-row items-center bg-white dark:bg-neutral-800 rounded-2xl px-4 py-4 mb-3 shadow-xs active:opacity-80"
      onPress={onPress}
    >
      {/* Icon */}
      <View
        className="w-12 h-12 rounded-xl items-center justify-center mr-4"
        style={{ backgroundColor: slot.bgColor }}
      >
        {slot.icon}
      </View>

      {/* Name */}
      <Text className="flex-1 text-base text-neutral-900 dark:text-neutral-100 font-poppins-semibold">
        {slot.name}
      </Text>

      {/* Time */}
      <Text className="text-lg text-primary font-poppins-semibold">
        {displayTime ?? slot.time}
      </Text>
    </Pressable>
  );
}
