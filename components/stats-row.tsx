import { Check, X } from "lucide-react-native";
import { Text, View } from "react-native";

export interface StatsRowProps {
  takenCount: number;
  missedCount: number;
}

export function StatsRow({ takenCount, missedCount }: StatsRowProps) {
  return (
    <View className="flex-row gap-3">
      {/* Taken Card */}
      <View className="flex-1 bg-white dark:bg-neutral-800 rounded-2xl p-4 border border-neutral-200 dark:border-neutral-700">
        <View className="flex-row items-center mb-2">
          <View className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 items-center justify-center mr-2">
            <Check size={14} color="#22C55E" strokeWidth={3} />
          </View>
          <Text className="text-xs text-neutral-500 dark:text-neutral-400 font-poppins-medium uppercase tracking-wide">
            Taken
          </Text>
        </View>
        <View className="flex-row items-baseline">
          <Text className="text-3xl text-neutral-900 dark:text-neutral-100 font-poppins-bold">
            {takenCount}
          </Text>
          <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins ml-1.5">
            {takenCount === 1 ? "Dose" : "Doses"}
          </Text>
        </View>
      </View>

      {/* Missed Card */}
      <View className="flex-1 bg-white dark:bg-neutral-800 rounded-2xl p-4 border border-neutral-200 dark:border-neutral-700">
        <View className="flex-row items-center mb-2">
          <View className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 items-center justify-center mr-2">
            <X size={14} color="#EF4444" strokeWidth={3} />
          </View>
          <Text className="text-xs text-neutral-500 dark:text-neutral-400 font-poppins-medium uppercase tracking-wide">
            Missed
          </Text>
        </View>
        <View className="flex-row items-baseline">
          <Text className="text-3xl text-neutral-900 dark:text-neutral-100 font-poppins-bold">
            {missedCount}
          </Text>
          <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins ml-1.5">
            {missedCount === 1 ? "Dose" : "Doses"}
          </Text>
        </View>
      </View>
    </View>
  );
}
