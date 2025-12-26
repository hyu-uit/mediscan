import { Button } from "@/components/button";
import { ColorPickerModal } from "@/components/color-picker-modal";
import { TimePicker, TimeValue } from "@/components/time-picker";
import { ChevronLeft, RotateCcw } from "lucide-react-native";
import { useState } from "react";
import {
  Alert,
  Pressable,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from "@/constants/theme";
import { TimeSlotId, useColorStore } from "@/stores/color-store";
import { TimeSlotCard } from "./time-slot-card";

export interface DefaultTimeValues {
  MORNING?: string;
  NOON?: string;
  AFTERNOON?: string;
  NIGHT?: string;
  BEFORE_SLEEP?: string;
}

interface DefaultScheduleScreenProps {
  onBack?: () => void;
  onSaveConfiguration?: (schedule: Record<string, boolean>) => void;
  /** Initial time values to pre-fill (e.g., from user settings) */
  initialValues?: DefaultTimeValues;
  /** Mode determines the screen title and behavior */
  mode?: "onboarding" | "settings";
}

// Static slot configuration (without icons - they'll be rendered in the card)
interface SlotConfig {
  id: TimeSlotId;
  name: string;
  defaultTime: string;
  defaultEnabled: boolean;
}

const SLOT_CONFIGS: SlotConfig[] = [
  {
    id: "MORNING",
    name: "Morning",
    defaultTime: "08:00 AM",
    defaultEnabled: true,
  },
  { id: "NOON", name: "Noon", defaultTime: "12:00 PM", defaultEnabled: true },
  {
    id: "AFTERNOON",
    name: "Afternoon",
    defaultTime: "04:00 PM",
    defaultEnabled: true,
  },
  { id: "NIGHT", name: "Night", defaultTime: "08:00 PM", defaultEnabled: true },
  {
    id: "BEFORE_SLEEP",
    name: "Before Sleep",
    defaultTime: "10:00 PM",
    defaultEnabled: false,
  },
];

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

// Initialize times from slot configs
function initializeTimes(
  configs: SlotConfig[],
  initialValues?: DefaultTimeValues
): Record<string, TimeValue> {
  return configs.reduce((acc, slot) => {
    const initialTime = initialValues?.[slot.id];
    acc[slot.id] = initialTime
      ? parseTime(initialTime)
      : parseTime(slot.defaultTime);
    return acc;
  }, {} as Record<string, TimeValue>);
}

export function DefaultScheduleScreen({
  onBack,
  onSaveConfiguration,
  initialValues,
  mode = "onboarding",
}: DefaultScheduleScreenProps) {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  // Color store
  const { setTimeSlotColor, colors, resetToDefaults } = useColorStore();

  const handleResetColors = () => {
    Alert.alert(
      "Reset Colors",
      "Are you sure you want to reset all colors to default?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Reset", style: "destructive", onPress: resetToDefaults },
      ]
    );
  };

  // State for custom times per slot - use initial values if provided
  const [times, setTimes] = useState<Record<string, TimeValue>>(() =>
    initializeTimes(SLOT_CONFIGS, initialValues)
  );

  // State for time picker
  const [pickerOpen, setPickerOpen] = useState(false);
  const [editingSlotId, setEditingSlotId] = useState<TimeSlotId | null>(null);

  // State for color picker
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [editingColorSlot, setEditingColorSlot] = useState<TimeSlotId | null>(
    null
  );

  const handleSlotPress = (slotId: TimeSlotId) => {
    setEditingSlotId(slotId);
    setPickerOpen(true);
  };

  const handleColorPress = (slotId: TimeSlotId) => {
    setEditingColorSlot(slotId);
    setColorPickerOpen(true);
  };

  const handleTimeChange = (newTime: TimeValue) => {
    if (editingSlotId) {
      setTimes((prev) => ({
        ...prev,
        [editingSlotId]: newTime,
      }));
    }
  };

  const handleColorChange = (newColor: string) => {
    if (editingColorSlot) {
      setTimeSlotColor(editingColorSlot, newColor);
    }
  };

  const handleSave = () => {
    const schedule = SLOT_CONFIGS.reduce((acc, slot) => {
      acc[slot.id] = slot.defaultEnabled;
      return acc;
    }, {} as Record<string, boolean>);
    onSaveConfiguration?.(schedule);
  };

  const editingSlotConfig = editingSlotId
    ? SLOT_CONFIGS.find((s) => s.id === editingSlotId)
    : null;

  return (
    <View
      className="flex-1 bg-background dark:bg-neutral-900 px-6"
      style={{ paddingTop: insets.top }}
    >
      {/* Header */}
      <View className="flex-row items-center justify-between py-4">
        <Pressable
          className="w-10 h-10 items-center justify-center -ml-2"
          onPress={onBack}
        >
          <ChevronLeft
            size={28}
            color={isDark ? Colors.icon.light : Colors.icon.dark}
          />
        </Pressable>
        <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-semibold">
          Default Intake Times
        </Text>
        <TouchableOpacity
          className="w-10 h-10 items-center justify-center -mr-2"
          onPress={handleResetColors}
          activeOpacity={0.7}
        >
          <RotateCcw
            size={20}
            color={isDark ? Colors.icon.light : Colors.icon.dark}
          />
        </TouchableOpacity>
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
          {SLOT_CONFIGS.map((slot) => (
            <TimeSlotCard
              key={slot.id}
              slotId={slot.id}
              name={slot.name}
              displayTime={formatTime(times[slot.id])}
              onPress={() => handleSlotPress(slot.id)}
              onColorPress={() => handleColorPress(slot.id)}
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
        initialTime={editingSlotId ? times[editingSlotId] : undefined}
        title={
          editingSlotConfig
            ? `Edit ${editingSlotConfig.name} Time`
            : "Edit Time"
        }
      />

      {/* Color Picker */}
      <ColorPickerModal
        isOpen={colorPickerOpen}
        initialColor={editingColorSlot ? colors[editingColorSlot] : "#000000"}
        title={
          editingColorSlot
            ? `Choose ${editingColorSlot.replace("_", " ")} Color`
            : "Choose Color"
        }
        onClose={() => setColorPickerOpen(false)}
        onSave={handleColorChange}
      />
    </View>
  );
}
