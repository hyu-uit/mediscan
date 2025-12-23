import { TimeSlotColors, TimeSlotVariant } from "@/constants/theme";
import { Text, View } from "react-native";

export type BadgeVariant = TimeSlotVariant;

export interface BadgeProps {
  title: string;
  variant: BadgeVariant;
}

export function Badge({ title, variant }: BadgeProps) {
  const { color, bgColor } = TimeSlotColors[variant];

  return (
    <View
      className="px-3 py-1.5 rounded-full"
      style={{ backgroundColor: bgColor }}
    >
      <Text className="text-sm font-poppins-semibold" style={{ color }}>
        {title}
      </Text>
    </View>
  );
}
