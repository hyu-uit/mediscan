import { Utensils } from "lucide-react-native";
import { Text, useColorScheme, View } from "react-native";

interface InstructionItemProps {
  instruction: string;
  icon?: "food" | "default";
}

export function InstructionItem({
  instruction,
  icon = "default",
}: InstructionItemProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const iconColor = isDark ? "#FBBF24" : "#D97706";

  return (
    <View
      className="flex-row items-center px-4 py-3"
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: isDark ? "#78350F" : "#FDE68A",
        backgroundColor: isDark ? "rgba(251, 191, 36, 0.1)" : "#FFFBEB",
      }}
    >
      <Utensils size={18} color={iconColor} />
      <Text className="text-base text-amber-900 dark:text-amber-200 font-poppins-medium ml-3">
        {instruction}
      </Text>
    </View>
  );
}
