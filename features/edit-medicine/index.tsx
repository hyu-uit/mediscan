import { Button } from "@/components/button";
import { IntervalPicker, IntervalValue } from "@/components/interval-picker";
import { Select } from "@/components/select";
import { TextInput } from "@/components/text-input";
import { TimePicker, TimeValue } from "@/components/time-picker";
import BottomSheet from "@gorhom/bottom-sheet";
import { yupResolver } from "@hookform/resolvers/yup";
import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeft, Plus, UtensilsCrossed } from "lucide-react-native";
import { useCallback, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  AddIntakeTimeSheet,
  DaySelector,
  FrequencySelector,
  IntakeTimeCard,
} from "./components";
import { TIME_SLOT_OPTIONS, UNIT_OPTIONS } from "./constants";
import { medicineFormSchema } from "./schema";
import {
  DayOfWeek,
  DEFAULT_FORM_DATA,
  DosageUnitType,
  FrequencyType,
  FrequencyTypeValue,
  IntakeTime,
  IntakeTimeType,
  IntakeTimeTypeValue,
  IntervalUnitType,
  MedicineFormData,
  MOCK_MEDICINE,
} from "./types";
import { formatTime, parseTime } from "./utils";

export function EditMedicineScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const params = useLocalSearchParams<{ id?: string }>();
  const isEditMode = !!params.id;

  // React Hook Form
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<MedicineFormData>({
    resolver: yupResolver(medicineFormSchema) as any,
    defaultValues: isEditMode ? MOCK_MEDICINE : DEFAULT_FORM_DATA,
  });

  // Watch form values for conditional rendering
  const frequencyType = watch("frequencyType");
  const intakeTimes = watch("intakeTimes");
  const intervalValue = watch("intervalValue");
  const intervalUnit = watch("intervalUnit");
  const selectedDays = watch("selectedDays");

  // Time picker state
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [editingIntakeTime, setEditingIntakeTime] = useState<IntakeTime | null>(
    null
  );

  // Add intake time popup state
  const addTimeSheetRef = useRef<BottomSheet>(null);
  const [isAddTimeOpen, setIsAddTimeOpen] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<IntakeTimeTypeValue>(
    IntakeTimeType.MORNING
  );
  const [newIntakeTime, setNewIntakeTime] = useState<TimeValue>({
    hour: "08",
    minute: "00",
    period: "AM",
  });

  // Interval picker state
  const [intervalPickerOpen, setIntervalPickerOpen] = useState(false);
  const [previousFrequencyType, setPreviousFrequencyType] =
    useState<FrequencyTypeValue | null>(null);

  // Navigation handlers
  const handleBack = () => router.back();
  const handleCancel = () => router.back();

  // Form submission
  const onSubmit = (data: MedicineFormData) => {
    console.log("Saving medicine:", data);
    router.back();
  };

  // Intake time handlers
  const handleAddTimePress = () => {
    setSelectedTimeSlot(IntakeTimeType.MORNING);
    setNewIntakeTime(TIME_SLOT_OPTIONS[0].defaultTime);
    setIsAddTimeOpen(true);
    addTimeSheetRef.current?.expand();
  };

  const handleAddTimeClose = () => {
    setIsAddTimeOpen(false);
    addTimeSheetRef.current?.close();
  };

  const handleAddTimeSave = () => {
    const newTime: IntakeTime = {
      id: Date.now().toString(),
      time: formatTime(newIntakeTime),
      type: selectedTimeSlot,
    };
    setValue("intakeTimes", [...intakeTimes, newTime], {
      shouldValidate: true,
    });
    handleAddTimeClose();
  };

  const handleEditIntakeTime = (intakeTime: IntakeTime) => {
    setEditingIntakeTime(intakeTime);
    setTimePickerOpen(true);
  };

  const handleTimePickerSave = (time: TimeValue) => {
    if (editingIntakeTime) {
      const updatedTimes = intakeTimes.map((t) =>
        t.id === editingIntakeTime.id ? { ...t, time: formatTime(time) } : t
      );
      setValue("intakeTimes", updatedTimes);
      setEditingIntakeTime(null);
    }
  };

  const handleDeleteIntakeTime = (id: string) => {
    setValue(
      "intakeTimes",
      intakeTimes.filter((t) => t.id !== id),
      { shouldValidate: true }
    );
  };

  const handleTimeSlotSelect = (slotId: IntakeTimeTypeValue) => {
    setSelectedTimeSlot(slotId);
    const slot = TIME_SLOT_OPTIONS.find((s) => s.id === slotId);
    if (slot) {
      setNewIntakeTime(slot.defaultTime);
    }
  };

  const handleAddTimeSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      setIsAddTimeOpen(false);
    }
  }, []);

  // Frequency type change handler - resets fields for other types
  const handleFrequencyTypeChange = (type: FrequencyTypeValue) => {
    setValue("frequencyType", type);

    // Reset fields based on selected type
    if (type === FrequencyType.DAILY) {
      // Reset interval and specific days fields
      setValue("intervalValue", "1");
      setValue("intervalUnit", "DAYS" as IntervalUnitType);
      setValue("selectedDays", []);
    } else if (type === FrequencyType.INTERVAL) {
      // Reset specific days
      setValue("selectedDays", []);
    } else if (type === FrequencyType.SPECIFIC_DAYS) {
      // Reset interval fields
      setValue("intervalValue", "1");
      setValue("intervalUnit", "DAYS" as IntervalUnitType);
    }
  };

  // Interval picker handlers
  const handleIntervalOptionPress = () => {
    if (frequencyType !== FrequencyType.INTERVAL) {
      setPreviousFrequencyType(frequencyType);
    }
    setIntervalPickerOpen(true);
  };

  const handleIntervalSave = (interval: IntervalValue) => {
    setValue("frequencyType", FrequencyType.INTERVAL);
    setValue("intervalValue", interval.value);
    setValue("intervalUnit", interval.unit as IntervalUnitType);
    // Reset specific days when switching to interval
    setValue("selectedDays", []);
    setPreviousFrequencyType(null);
    setIntervalPickerOpen(false);
  };

  const handleIntervalClose = () => {
    if (previousFrequencyType !== null) {
      setValue("frequencyType", previousFrequencyType);
      setPreviousFrequencyType(null);
    }
    setIntervalPickerOpen(false);
  };

  // Day selector handler
  const handleToggleDay = (day: DayOfWeek) => {
    const isSelected = selectedDays.includes(day);
    const newDays = isSelected
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];
    setValue("selectedDays", newDays);
  };

  return (
    <SafeAreaView
      className="flex-1 bg-background dark:bg-neutral-900"
      edges={["top"]}
    >
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Header */}
        <View className="flex-row items-center px-4 py-3">
          <TouchableOpacity
            onPress={handleBack}
            className="w-10 h-10 items-center justify-center"
            activeOpacity={0.7}
          >
            <ChevronLeft size={24} color={isDark ? "#F5F5F5" : "#171717"} />
          </TouchableOpacity>
          <Text className="flex-1 text-center text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold mr-10">
            {isEditMode ? "Edit Medicine" : "Add Medicine"}
          </Text>
        </View>

        <ScrollView
          className="flex-1 px-4"
          contentContainerStyle={{ paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Medicine Name */}
          <View className="mb-4">
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Medicine Name"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter medicine name"
                  error={errors.name?.message}
                />
              )}
            />
          </View>

          {/* Dosage and Unit Row */}
          <View className="flex-row gap-3 mb-4">
            <View className="flex-1">
              <Controller
                control={control}
                name="dosage"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    label="Dosage"
                    value={value}
                    onChangeText={onChange}
                    placeholder="Enter dosage"
                    keyboardType="numeric"
                    error={errors.dosage?.message}
                  />
                )}
              />
            </View>
            <View className="flex-1">
              <Controller
                control={control}
                name="unit"
                render={({ field: { onChange, value } }) => (
                  <Select
                    label="Unit"
                    value={value}
                    onValueChange={(val) => onChange(val as DosageUnitType)}
                    options={UNIT_OPTIONS}
                    placeholder="Select unit"
                  />
                )}
              />
            </View>
          </View>

          {/* Instructions */}
          <View className="mb-4">
            <Controller
              control={control}
              name="instructions"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Instructions"
                  value={value}
                  onChangeText={onChange}
                  placeholder="e.g., Take with food"
                  rightIcon={
                    <UtensilsCrossed
                      size={18}
                      color={isDark ? "#9CA3AF" : "#6B7280"}
                    />
                  }
                />
              )}
            />
          </View>

          {/* Frequency Selector */}
          <FrequencySelector
            selectedType={frequencyType}
            intervalValue={intervalValue}
            intervalUnit={intervalUnit}
            onSelectType={handleFrequencyTypeChange}
            onIntervalPress={handleIntervalOptionPress}
          />

          {/* Day Selector - Only show when specific-days is selected */}
          {frequencyType === FrequencyType.SPECIFIC_DAYS && (
            <DaySelector
              selectedDays={selectedDays}
              onToggleDay={handleToggleDay}
            />
          )}

          {/* Intake Times */}
          <View className="mb-4">
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-sm font-poppins-medium text-neutral-900 dark:text-neutral-100">
                Intake Times
              </Text>
              <TouchableOpacity
                onPress={handleAddTimePress}
                className="flex-row items-center"
                activeOpacity={0.7}
              >
                <Plus size={16} color="#4CD964" />
                <Text className="text-sm font-poppins-semibold text-primary ml-1">
                  Add Time
                </Text>
              </TouchableOpacity>
            </View>

            <View className="gap-3">
              {intakeTimes.map((intakeTime) => (
                <IntakeTimeCard
                  key={intakeTime.id}
                  time={intakeTime.time}
                  type={intakeTime.type}
                  onEdit={() => handleEditIntakeTime(intakeTime)}
                  onDelete={() => handleDeleteIntakeTime(intakeTime.id)}
                  isDark={isDark}
                />
              ))}
            </View>

            {intakeTimes.length === 0 && (
              <View className="py-6 items-center">
                <Text className="text-sm text-neutral-400 font-poppins">
                  No intake times added yet
                </Text>
              </View>
            )}

            {errors.intakeTimes && (
              <Text className="text-sm font-poppins text-red-500 mt-2">
                {errors.intakeTimes.message}
              </Text>
            )}
          </View>

          {/* Notes */}
          <View className="mb-4">
            <Controller
              control={control}
              name="notes"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Notes"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Add any additional notes..."
                  multiline
                  numberOfLines={4}
                />
              )}
            />
          </View>
        </ScrollView>

        {/* Bottom Buttons */}
        <View className="absolute bottom-0 left-0 right-0 px-4 pb-8 pt-4 bg-background dark:bg-neutral-900">
          <Button fullWidth onPress={handleSubmit(onSubmit)}>
            Save Changes
          </Button>
          <View className="h-3" />
          <TouchableOpacity onPress={handleCancel} activeOpacity={0.7}>
            <Text className="text-center text-base text-neutral-500 font-poppins-medium">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      {/* Time Picker for editing existing intake time */}
      <TimePicker
        isOpen={timePickerOpen && !isAddTimeOpen}
        onClose={() => {
          setTimePickerOpen(false);
          setEditingIntakeTime(null);
        }}
        onSave={handleTimePickerSave}
        initialTime={
          editingIntakeTime ? parseTime(editingIntakeTime.time) : undefined
        }
        title="Edit Intake Time"
        lockedPeriod={
          editingIntakeTime
            ? TIME_SLOT_OPTIONS.find((s) => s.id === editingIntakeTime.type)
                ?.allowedPeriod
            : undefined
        }
      />

      {/* Add Intake Time Bottom Sheet */}
      <AddIntakeTimeSheet
        ref={addTimeSheetRef}
        selectedTimeSlot={selectedTimeSlot}
        newIntakeTime={newIntakeTime}
        onTimeSlotSelect={handleTimeSlotSelect}
        onTimePress={() => setTimePickerOpen(true)}
        onSave={handleAddTimeSave}
        onClose={handleAddTimeClose}
        onSheetChange={handleAddTimeSheetChanges}
        isDark={isDark}
      />

      {/* Secondary Time Picker for Add Time popup */}
      {isAddTimeOpen && (
        <TimePicker
          isOpen={timePickerOpen && isAddTimeOpen}
          onClose={() => setTimePickerOpen(false)}
          onSave={(time) => {
            setNewIntakeTime(time);
            setTimePickerOpen(false);
          }}
          initialTime={newIntakeTime}
          title="Select Time"
          lockedPeriod={
            TIME_SLOT_OPTIONS.find((s) => s.id === selectedTimeSlot)
              ?.allowedPeriod
          }
        />
      )}

      {/* Interval Picker */}
      <IntervalPicker
        isOpen={intervalPickerOpen}
        onClose={handleIntervalClose}
        onSave={handleIntervalSave}
        initialValue={{
          value: intervalValue,
          unit: intervalUnit,
        }}
        title="Set Interval"
      />
    </SafeAreaView>
  );
}
