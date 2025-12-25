import { Button } from "@/components/button";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Text, useColorScheme, View } from "react-native";

import { TimeColumn } from "./time-column";

// Generate hours 01-12
const HOURS = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);

// Generate minutes 00-59
const MINUTES = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0")
);

// AM/PM
const PERIODS = ["AM", "PM"];

export interface TimeValue {
  hour: string;
  minute: string;
  period: "AM" | "PM";
}

interface TimePickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (time: TimeValue) => void;
  initialTime?: TimeValue;
  title?: string;
  lockedPeriod?: "AM" | "PM"; // Lock period to specific value (disables period selection)
}

export function TimePicker({
  isOpen,
  onClose,
  onSave,
  initialTime = { hour: "08", minute: "00", period: "AM" },
  title = "Edit Time",
  lockedPeriod,
}: TimePickerProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["45%"], []);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const [selectedHour, setSelectedHour] = useState(initialTime.hour);
  const [selectedMinute, setSelectedMinute] = useState(initialTime.minute);
  const [selectedPeriod, setSelectedPeriod] = useState<"AM" | "PM">(
    initialTime.period
  );

  // Reset state when initial time changes or when opened
  useEffect(() => {
    if (isOpen) {
      setSelectedHour(initialTime.hour);
      setSelectedMinute(initialTime.minute);
      // Use locked period if provided, otherwise use initial time period
      setSelectedPeriod(lockedPeriod ?? initialTime.period);
    }
  }, [isOpen, initialTime, lockedPeriod]);

  // Handle open/close
  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isOpen]);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose();
      }
    },
    [onClose]
  );

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );

  const handleSave = () => {
    onSave({
      hour: selectedHour,
      minute: selectedMinute,
      period: selectedPeriod,
    });
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      handleIndicatorStyle={{
        backgroundColor: isDark ? "#525252" : "#D1D5DB",
        width: 40,
      }}
      backgroundStyle={{
        backgroundColor: isDark ? "#262626" : "#FFFFFF",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <BottomSheetView className="flex-1 px-6 pb-8">
        {/* Header */}
        <View className="items-center mb-6">
          <Text className="text-xl text-neutral-900 dark:text-neutral-100 font-poppins-bold">
            {title}
          </Text>
          <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins mt-1">
            Scroll to select a new time
          </Text>
        </View>

        {/* Time Picker Columns */}
        <View className="flex-row justify-center items-center gap-2 mb-8">
          {/* Hour Column */}
          <View className="w-20">
            <TimeColumn
              data={HOURS}
              selectedValue={selectedHour}
              onValueChange={setSelectedHour}
            />
          </View>

          {/* Separator */}
          <Text className="text-2xl text-neutral-900 dark:text-neutral-100 font-poppins-bold">
            :
          </Text>

          {/* Minute Column */}
          <View className="w-20">
            <TimeColumn
              data={MINUTES}
              selectedValue={selectedMinute}
              onValueChange={setSelectedMinute}
            />
          </View>

          {/* Period Column */}
          <View className="w-16 ml-2">
            {lockedPeriod ? (
              // Show locked period as static text (matching TimeColumn styling)
              <View className="h-[150px] overflow-hidden">
                <View
                  className="absolute left-0 right-0 bg-primary/10 dark:bg-primary/20 rounded-xl"
                  style={{ top: 50, height: 50 }}
                />
                <View className="h-full items-center justify-center">
                  <Text className="text-2xl text-neutral-900 dark:text-neutral-100 font-poppins-semibold">
                    {lockedPeriod}
                  </Text>
                </View>
              </View>
            ) : (
              <TimeColumn
                data={PERIODS}
                selectedValue={selectedPeriod}
                onValueChange={(value) =>
                  setSelectedPeriod(value as "AM" | "PM")
                }
              />
            )}
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-3">
          <View className="flex-1">
            <Button variant="secondary" fullWidth onPress={handleCancel}>
              Cancel
            </Button>
          </View>
          <View className="flex-1">
            <Button fullWidth onPress={handleSave}>
              Save Time
            </Button>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}
