import { MedicineStatus, MedicineStatusType } from "@/api/medicines";
import { Text, View } from "react-native";

interface MedicineStatusBadgeProps {
  status: MedicineStatusType;
}

const STATUS_CONFIG = {
  [MedicineStatus.ACTIVE]: {
    label: "ACTIVE",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-600 dark:text-green-400",
  },
  [MedicineStatus.LOW_STOCK]: {
    label: "LOW STOCK",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    textColor: "text-amber-600 dark:text-amber-400",
  },
  [MedicineStatus.SUPP]: {
    label: "SUPP",
    bgColor: "bg-neutral-100 dark:bg-neutral-800",
    textColor: "text-neutral-500 dark:text-neutral-400",
  },
  [MedicineStatus.INACTIVE]: {
    label: "INACTIVE",
    bgColor: "bg-neutral-100 dark:bg-neutral-800",
    textColor: "text-neutral-400 dark:text-neutral-500",
  },
} as const;

export function MedicineStatusBadge({ status }: MedicineStatusBadgeProps) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG[MedicineStatus.ACTIVE];

  return (
    <View className={`px-2 py-1 rounded-md ${config.bgColor}`}>
      <Text className={`text-xs font-poppins-semibold ${config.textColor}`}>
        {config.label}
      </Text>
    </View>
  );
}

