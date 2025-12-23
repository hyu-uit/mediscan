import { Button } from "@/components/button";
import { TimePicker, TimeValue } from "@/components/time-picker";
import {
  Bed,
  ChevronLeft,
  CloudSun,
  MoonStar,
  Sun,
  Sunrise,
} from "lucide-react-native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TimeSlot, TimeSlotCard } from "./time-slot-card";

interface DefaultScheduleScreenProps {
  onBack?: () => void;
  onSaveConfiguration?: (schedule: Record<string, boolean>) => void;
}

// Parse time string like "08:00 AM" to TimeValue
function parseTime(timeStr: string): TimeValue {
  const match = timeStr.match(/(\d{2}):(\d{2})\s*(AM|PM)/i);
  if (match) {
    return {
      hour: match[1],
      minute: match[2],
      period: match[3].toUpperCase() as "AM" | "PM",
    };
  }
  return { hour: "08", minute: "00", period: "AM" };
}

// Format TimeValue to display string
function formatTime(time: TimeValue): string {
  return `${time.hour}:${time.minute} ${time.period}`;
}

const TIME_SLOTS: TimeSlot[] = [
  {
    id: "morning",
    name: "Morning",
    time: "08:00 AM",
    icon: <Sunrise size={24} color="#EA580C" />,
    bgColor: "#FFEDD5",
    defaultEnabled: true,
  },
  {
    id: "noon",
    name: "Noon",
    time: "12:00 PM",
    icon: <Sun size={24} color="#D97706" />,
    bgColor: "#FEF3C7",
    defaultEnabled: true,
  },
  {
    id: "afternoon",
    name: "Afternoon",
    time: "04:00 PM",
    icon: <CloudSun size={24} color="#0EA5E9" />,
    bgColor: "#E0F2FE",
    defaultEnabled: true,
  },
  {
    id: "night",
    name: "Night",
    time: "08:00 PM",
    icon: <MoonStar size={24} color="#6366F1" />,
    bgColor: "#EEF2FF",
    defaultEnabled: true,
  },
  {
    id: "before-sleep",
    name: "Before Sleep",
    time: "10:00 PM",
    icon: <Bed size={24} color="#57534E" />,
    bgColor: "#F5F5F4",
    defaultEnabled: false,
  },
];

export function DefaultScheduleScreen({
  onBack,
  onSaveConfiguration,
}: DefaultScheduleScreenProps) {
  const insets = useSafeAreaInsets();

  // State for custom times per slot
  const [times, setTimes] = useState<Record<string, TimeValue>>(() =>
    TIME_SLOTS.reduce((acc, slot) => {
      acc[slot.id] = parseTime(slot.time);
      return acc;
    }, {} as Record<string, TimeValue>)
  );

  // State for time picker
  const [pickerOpen, setPickerOpen] = useState(false);
  const [editingSlot, setEditingSlot] = useState<TimeSlot | null>(null);

  const handleSlotPress = (slot: TimeSlot) => {
    setEditingSlot(slot);
    setPickerOpen(true);
  };

  const handleTimeChange = (newTime: TimeValue) => {
    if (editingSlot) {
      setTimes((prev) => ({
        ...prev,
        [editingSlot.id]: newTime,
      }));
    }
  };

  const handleSave = () => {
    // Build schedule from default values
    const schedule = TIME_SLOTS.reduce((acc, slot) => {
      acc[slot.id] = slot.defaultEnabled;
      return acc;
    }, {} as Record<string, boolean>);
    onSaveConfiguration?.(schedule);
  };

  return (
    <View
      className="flex-1 bg-surface dark:bg-neutral-900 px-6"
      style={{ paddingTop: insets.top }}
    >
      {/* Header */}
      <View className="flex-row items-center py-4">
        <Pressable
          className="w-10 h-10 items-center justify-center -ml-2"
          onPress={onBack}
        >
          <ChevronLeft size={28} color="#171717" />
        </Pressable>
        <Text className="flex-1 text-center text-lg text-neutral-900 dark:text-neutral-100 font-poppins-semibold mr-8">
          Default Schedule
        </Text>
      </View>

      {/* Content */}
      <View className="flex-1 pt-4">
        {/* Heading */}
        <Text className="text-2xl text-neutral-900 dark:text-neutral-100 font-poppins-bold mb-2">
          Set Default Times
        </Text>
        <Text className="text-base text-neutral-500 dark:text-neutral-400 font-poppins mb-6">
          When do you usually take your meds during the day?
        </Text>

        {/* Time Slots */}
        <View>
          {TIME_SLOTS.map((slot) => (
            <TimeSlotCard
              key={slot.id}
              slot={slot}
              displayTime={formatTime(times[slot.id])}
              onPress={() => handleSlotPress(slot)}
            />
          ))}
        </View>
      </View>

      {/* Bottom Button */}
      <View className="pb-12">
        <Button fullWidth size="lg" onPress={handleSave}>
          Save Configuration
        </Button>
      </View>

      {/* Time Picker */}
      <TimePicker
        isOpen={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSave={handleTimeChange}
        initialTime={editingSlot ? times[editingSlot.id] : undefined}
        title={editingSlot ? `Edit ${editingSlot.name} Time` : "Edit Time"}
      />
    </View>
  );
}
