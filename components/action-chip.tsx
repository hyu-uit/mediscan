import { Text, TouchableOpacity } from "react-native";

export interface ActionChipProps {
  label: string;
  onPress?: () => void;
}

export function ActionChip({ label, onPress }: ActionChipProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="px-4 py-2 rounded-full border border-neutral-200 bg-white"
    >
      <Text className="text-sm text-neutral-900 font-poppins-medium">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
