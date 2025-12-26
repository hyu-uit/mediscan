import { Button } from "@/components/button";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Text, View } from "react-native";

import { IntervalColumn } from "./interval-column";

// Generate numbers 1-100
const NUMBERS = Array.from({ length: 100 }, (_, i) => String(i + 1));

// Interval units - API values
const UNIT_OPTIONS = [
  { value: "DAYS", label: "Days" },
  { value: "WEEKS", label: "Weeks" },
  { value: "MONTHS", label: "Months" },
];

const UNIT_LABELS = UNIT_OPTIONS.map((u) => u.label);

export type IntervalUnitValue = "DAYS" | "WEEKS" | "MONTHS";

export interface IntervalValue {
  value: string;
  unit: IntervalUnitValue;
}

interface IntervalPickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (interval: IntervalValue) => void;
  initialValue?: IntervalValue;
  title?: string;
}

// Helper to convert API unit to display label
function unitToLabel(unit: IntervalUnitValue): string {
  const option = UNIT_OPTIONS.find((u) => u.value === unit);
  return option?.label || "Days";
}

// Helper to convert display label to API unit
function labelToUnit(label: string): IntervalUnitValue {
  const option = UNIT_OPTIONS.find((u) => u.label === label);
  return (option?.value as IntervalUnitValue) || "DAYS";
}

export function IntervalPicker({
  isOpen,
  onClose,
  onSave,
  initialValue = { value: "1", unit: "DAYS" },
  title = "Set Interval",
}: IntervalPickerProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["45%"], []);

  const [selectedValue, setSelectedValue] = useState(initialValue.value);
  const [selectedUnitLabel, setSelectedUnitLabel] = useState(
    unitToLabel(initialValue.unit)
  );

  // Reset state when initial value changes or when opened
  useEffect(() => {
    if (isOpen) {
      setSelectedValue(initialValue.value);
      setSelectedUnitLabel(unitToLabel(initialValue.unit));
    }
  }, [isOpen, initialValue]);

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
      value: selectedValue,
      unit: labelToUnit(selectedUnitLabel),
    });
    // Note: onClose is NOT called here - the parent handles closing after save
  };

  const handleCancel = () => {
    onClose();
  };

  // Get display text for preview
  const getPreviewText = () => {
    const num = parseInt(selectedValue);
    const unitLower = selectedUnitLabel.toLowerCase();
    const unitSingular = unitLower.slice(0, -1); // Remove 's'
    return num === 1 ? `Every ${unitSingular}` : `Every ${num} ${unitLower}`;
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
        backgroundColor: "#D1D5DB",
        width: 40,
      }}
      backgroundStyle={{
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <BottomSheetView className="flex-1 px-6 pb-8">
        {/* Header */}
        <View className="items-center mb-4">
          <Text className="text-xl text-neutral-900 font-poppins-bold">
            {title}
          </Text>
          <Text className="text-sm text-neutral-500 font-poppins mt-1">
            Scroll to select interval
          </Text>
        </View>

        {/* Preview */}
        <View className="bg-primary/10 rounded-xl py-3 mb-4">
          <Text className="text-center text-lg text-primary-bright font-poppins-bold">
            {getPreviewText()}
          </Text>
        </View>

        {/* Picker Columns */}
        <View className="flex-row justify-center items-center gap-4 mb-8">
          {/* Number Column */}
          <View className="w-24">
            <IntervalColumn
              data={NUMBERS}
              selectedValue={selectedValue}
              onValueChange={setSelectedValue}
            />
          </View>

          {/* Unit Column */}
          <View className="w-32">
            <IntervalColumn
              data={UNIT_LABELS}
              selectedValue={selectedUnitLabel}
              onValueChange={setSelectedUnitLabel}
            />
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
              Save
            </Button>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}
