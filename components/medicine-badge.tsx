import { Text, TouchableOpacity } from "react-native";

interface MedicineBadgeProps {
  text: string;
  color: string;
  onPress?: () => void;
}

export function MedicineBadge({ text, color, onPress }: MedicineBadgeProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        backgroundColor: `${color}1A`, // 10% opacity
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 8,
      }}
      disabled={!onPress}
    >
      <Text
        style={{
          color: color,
          fontSize: 11,
          fontFamily: "Poppins_600SemiBold",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
