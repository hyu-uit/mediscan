import { Clock } from "lucide-react-native";
import { Text, useColorScheme, View } from "react-native";

interface IntakeTimeChipProps {
  time: string;
}

export function IntakeTimeChip({ time }: IntakeTimeChipProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View
      className="flex-row items-center self-start bg-neutral-50 dark:bg-neutral-800 px-4 py-3"
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: isDark ? "#404040" : "#E5E5E5",
      }}
    >
      <Clock size={16} color={isDark ? "#9CA3AF" : "#6B7280"} />
      <Text className="text-base text-neutral-800 dark:text-neutral-200 font-poppins-semibold ml-2">
        {time}
      </Text>
    </View>
  );
}
