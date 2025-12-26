import { FileText } from "lucide-react-native";
import { Text, useColorScheme, View } from "react-native";

interface InstructionItemProps {
  instruction: string;
}

export function InstructionItem({ instruction }: InstructionItemProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const iconColor = isDark ? "#9CA3AF" : "#6B7280";

  return (
    <View
      className="flex-row items-start px-4 py-3"
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: isDark ? "#404040" : "#E5E5E5",
        backgroundColor: isDark ? "rgba(64, 64, 64, 0.3)" : "#F5F5F5",
      }}
    >
      <FileText size={18} color={iconColor} />
      <Text className="flex-1 text-base text-neutral-700 dark:text-neutral-300 font-poppins-medium ml-3">
        {instruction}
      </Text>
    </View>
  );
}
