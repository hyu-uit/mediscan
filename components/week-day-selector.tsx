import { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface DayItem {
  date: Date;
  dayName: string;
  dayNumber: number;
  isSelected: boolean;
  isToday: boolean;
}

export interface WeekDaySelectorProps {
  selectedDate: Date;
  onDaySelect: (date: Date) => void;
}

function getWeekDays(selectedDate: Date): DayItem[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days: DayItem[] = [];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get the start of the current week (Monday)
  const startOfWeek = new Date(today);
  const dayOfWeek = today.getDay();
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Adjust for Monday start
  startOfWeek.setDate(today.getDate() + diff);

  // Generate 7 days (Mon-Sun)
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);

    const isSelected =
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();

    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    days.push({
      date,
      dayName: dayNames[date.getDay()],
      dayNumber: date.getDate(),
      isSelected,
      isToday,
    });
  }

  return days;
}

export function WeekDaySelector({
  selectedDate,
  onDaySelect,
}: WeekDaySelectorProps) {
  const days = useMemo(() => getWeekDays(selectedDate), [selectedDate]);

  return (
    <View className="px-6 mb-6">
      <View className="flex-row justify-between">
        {days.map((day) => (
          <TouchableOpacity
            key={day.date.toISOString()}
            onPress={() => onDaySelect(day.date)}
            className={`flex-1 items-center justify-center py-3 mx-0.5 rounded-2xl ${
              day.isSelected ? "bg-primary" : "bg-white dark:bg-neutral-800"
            }`}
          >
            <Text
              className={`text-xs font-poppins-medium mb-1 ${
                day.isSelected
                  ? "text-neutral-900"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              {day.dayName}
            </Text>
            <Text
              className={`text-lg font-poppins-bold ${
                day.isSelected
                  ? "text-neutral-900"
                  : "text-neutral-900 dark:text-neutral-100"
              }`}
            >
              {day.dayNumber}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
