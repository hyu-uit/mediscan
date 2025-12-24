import { Pencil } from "lucide-react-native";
import { Text, TouchableOpacity, useColorScheme } from "react-native";

interface FrequencyBadgeProps {
  frequency: string;
  onEdit?: () => void;
}

export function FrequencyBadge({ frequency, onEdit }: FrequencyBadgeProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <TouchableOpacity
      onPress={onEdit}
      className="flex-row items-center bg-violet-50 dark:bg-violet-900/30 px-3 py-1.5 rounded-full"
      activeOpacity={0.7}
    >
      <Text className="text-sm text-violet-700 dark:text-violet-400 font-poppins-semibold mr-1.5">
        {frequency}
      </Text>
      <Pencil size={12} color={isDark ? "#A78BFA" : "#6D28D9"} />
    </TouchableOpacity>
  );
}

