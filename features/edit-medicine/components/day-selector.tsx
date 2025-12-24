import { Pressable, Text, View } from "react-native";
import { DAYS_OF_WEEK } from "../constants";
import { DayOfWeek } from "../types";

interface DaySelectorProps {
  selectedDays: DayOfWeek[];
  onToggleDay: (day: DayOfWeek) => void;
}

export function DaySelector({ selectedDays, onToggleDay }: DaySelectorProps) {
  return (
    <View className="mb-4">
      <Text className="text-sm font-poppins-medium text-neutral-900 dark:text-neutral-100 mb-3">
        Select Days
      </Text>
      <View className="flex-row justify-between">
        {DAYS_OF_WEEK.map((day) => {
          const isSelected = selectedDays.includes(day.id);
          return (
            <Pressable
              key={day.id}
              onPress={() => onToggleDay(day.id)}
              className={`w-10 h-10 rounded-full items-center justify-center ${
                isSelected ? "bg-primary" : "bg-neutral-100 dark:bg-neutral-700"
              }`}
            >
              <Text
                className={`text-sm font-poppins-semibold ${
                  isSelected
                    ? "text-neutral-900"
                    : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                {day.short}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

