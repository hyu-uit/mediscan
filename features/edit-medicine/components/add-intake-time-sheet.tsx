import { Button } from "@/components/button";
import { TimeValue } from "@/components/time-picker";
import { TimeSlotId, useTimeSlotColor } from "@/stores/color-store";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { forwardRef, useCallback, useMemo } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { TIME_SLOT_OPTIONS } from "../constants";
import { IntakeTimeTypeValue } from "../types";
import { formatTime } from "../utils";

interface AddIntakeTimeSheetProps {
  selectedTimeSlot: IntakeTimeTypeValue;
  newIntakeTime: TimeValue;
  onTimeSlotSelect: (slotId: IntakeTimeTypeValue) => void;
  onTimePress: () => void;
  onSave: () => void;
  onClose: () => void;
  onSheetChange: (index: number) => void;
  isDark: boolean;
}

// Sub-component for time slot button that can use hooks
function TimeSlotButton({
  slot,
  isSelected,
  onPress,
  isDark,
}: {
  slot: (typeof TIME_SLOT_OPTIONS)[0];
  isSelected: boolean;
  onPress: () => void;
  isDark: boolean;
}) {
  const { color, bgColor } = useTimeSlotColor(slot.id as TimeSlotId);

  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center px-3 py-2 rounded-xl ${
        isSelected ? "" : "bg-neutral-100 dark:bg-neutral-700"
      }`}
      style={isSelected ? { backgroundColor: bgColor } : {}}
    >
      {slot.icon(isSelected ? color : isDark ? "#9CA3AF" : "#6B7280")}
      <Text
        className={`ml-2 text-sm font-poppins-medium ${
          isSelected ? "" : "text-neutral-600 dark:text-neutral-300"
        }`}
        style={isSelected ? { color } : {}}
      >
        {slot.name}
      </Text>
    </Pressable>
  );
}

export const AddIntakeTimeSheet = forwardRef<
  BottomSheet,
  AddIntakeTimeSheetProps
>(function AddIntakeTimeSheet(
  {
    selectedTimeSlot,
    newIntakeTime,
    onTimeSlotSelect,
    onTimePress,
    onSave,
    onClose,
    onSheetChange,
    isDark,
  },
  ref
) {
  const snapPoints = useMemo(() => ["50%"], []);

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

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      onChange={onSheetChange}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      handleIndicatorStyle={{
        backgroundColor: "#D1D5DB",
        width: 40,
      }}
      backgroundStyle={{
        backgroundColor: isDark ? "#262626" : "#FFFFFF",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <BottomSheetScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 32 }}
      >
        {/* Header */}
        <View className="items-center mb-6">
          <Text className="text-xl text-neutral-900 dark:text-neutral-100 font-poppins-bold">
            Add Intake Time
          </Text>
          <Text className="text-sm text-neutral-500 font-poppins mt-1">
            Select a time slot and time
          </Text>
        </View>

        {/* Time Slot Selector */}
        <Text className="text-sm font-poppins-medium text-neutral-900 dark:text-neutral-100 mb-3">
          Time Slot
        </Text>
        <View className="flex-row flex-wrap gap-2 mb-6">
          {TIME_SLOT_OPTIONS.map((slot) => (
            <TimeSlotButton
              key={slot.id}
              slot={slot}
              isSelected={selectedTimeSlot === slot.id}
              onPress={() => onTimeSlotSelect(slot.id)}
              isDark={isDark}
            />
          ))}
        </View>

        {/* Time Display */}
        <Text className="text-sm font-poppins-medium text-neutral-900 dark:text-neutral-100 mb-3">
          Time
        </Text>
        <TouchableOpacity
          onPress={onTimePress}
          className="bg-neutral-100 dark:bg-neutral-700 px-4 py-4 rounded-xl mb-6"
          activeOpacity={0.7}
        >
          <Text className="text-2xl text-center text-neutral-900 dark:text-neutral-100 font-poppins-bold">
            {formatTime(newIntakeTime)}
          </Text>
        </TouchableOpacity>

        {/* Action Buttons */}
        <View className="flex-row gap-3">
          <View className="flex-1">
            <Button variant="secondary" fullWidth onPress={onClose}>
              Cancel
            </Button>
          </View>
          <View className="flex-1">
            <Button fullWidth onPress={onSave}>
              Add Time
            </Button>
          </View>
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
});
