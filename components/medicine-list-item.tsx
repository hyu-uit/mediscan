import { MedicineDto } from "@/api/medicines";
import { Colors } from "@/constants/theme";
import { ChevronRight, Pill } from "lucide-react-native";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { MedicineStatusBadge } from "./medicine-status-badge";

interface MedicineListItemProps {
  medicine: MedicineDto;
  onPress?: () => void;
}

export function MedicineListItem({ medicine, onPress }: MedicineListItemProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  // Format dosage display
  const dosageDisplay = `${medicine.dosage} ${medicine.unit.toLowerCase()}`;

  // Format frequency with instructions
  const frequencyDisplay = medicine.instructions
    ? `${medicine.frequency} ${medicine.instructions}`
    : medicine.frequency;

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center bg-white dark:bg-neutral-800 rounded-2xl p-4 mb-3"
      activeOpacity={0.7}
    >
      {/* Icon */}
      <View className="w-12 h-12 rounded-xl items-center justify-center mr-3 bg-primary dark:bg-neutral-800">
        <Pill size={24} color={Colors.primaryBright} />
      </View>

      {/* Content */}
      <View className="flex-1 mr-3">
        <Text
          className="text-base text-neutral-900 dark:text-neutral-100 font-poppins-bold mb-1"
          numberOfLines={1}
        >
          {medicine.name}
        </Text>
        <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins">
          {dosageDisplay}
        </Text>
        <Text
          className="text-sm text-neutral-400 dark:text-neutral-500 font-poppins"
          numberOfLines={1}
        >
          • {frequencyDisplay}
        </Text>
      </View>

      {/* Status Badge and Chevron */}
      <View className="items-end">
        <MedicineStatusBadge status={medicine.status} />
        <ChevronRight
          size={20}
          color={isDark ? Colors.icon.muted : Colors.icon.default}
          style={{ marginTop: 8 }}
        />
      </View>
    </TouchableOpacity>
  );
}
