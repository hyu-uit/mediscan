import { Button } from "@/components/button";
import { MedicineCard } from "@/components/medicine-card";
import { FrequencyType } from "@/features/edit-medicine/types";
import { useBulkCreateSchedules } from "@/hooks/useSchedule";
import { ScheduleMedicine, useScheduleStore } from "@/stores/schedule-store";
import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeft, CircleHelp, Plus } from "lucide-react-native";
import { useEffect, useMemo, useRef } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Helper to format frequency for display
function formatFrequency(medicine: ScheduleMedicine): string {
  switch (medicine.frequencyType) {
    case FrequencyType.DAILY:
      return "Daily";
    case FrequencyType.INTERVAL:
      return `Every ${
        medicine.intervalValue
      } ${medicine.intervalUnit.toLowerCase()}`;
    case FrequencyType.SPECIFIC_DAYS:
      return medicine.selectedDays.join(", ");
    default:
      return "Daily";
  }
}

// Helper to format dosage for display
function formatDosage(medicine: ScheduleMedicine): string {
  return `${medicine.dosage} ${medicine.unit}`;
}

export function ConfirmScheduleScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const params = useLocalSearchParams<{ openAddMedicine?: string }>();
  const hasOpenedAddMedicine = useRef(false);

  // Schedule store
  const { medicines, deleteMedicine } = useScheduleStore();

  // Bulk create mutation
  const bulkCreateMutation = useBulkCreateSchedules();

  // Format medicines for display
  const displayMedicines = useMemo(() => {
    return medicines.map((medicine) => ({
      id: medicine.id,
      name: medicine.name,
      dosage: formatDosage(medicine),
      frequency: formatFrequency(medicine),
      intakeTimes: medicine.intakeTimes.map((t) => ({
        id: t.id,
        time: t.time,
      })),
      instructions: medicine.instructions
        ? [{ id: "1", text: medicine.instructions, icon: "default" as const }]
        : [],
    }));
  }, [medicines]);

  // Auto-open edit-medicine screen if openAddMedicine param is true
  useEffect(() => {
    if (params.openAddMedicine === "true" && !hasOpenedAddMedicine.current) {
      hasOpenedAddMedicine.current = true;
      // Use setTimeout to ensure the screen is mounted before navigating
      setTimeout(() => {
        router.push("/edit-medicine");
      }, 100);
    }
  }, [params.openAddMedicine]);

  const handleBack = () => {
    router.back();
  };

  const handleHelp = () => {
    // TODO: Show help content
    console.log("Help pressed");
  };

  const handleDeleteMedicine = (medicineId: string) => {
    deleteMedicine(medicineId);
  };

  const handleEditDosage = (medicineId: string) => {
    // TODO: Navigate to edit dosage
    console.log("Edit dosage:", medicineId);
  };

  const handleEditFrequency = (medicineId: string) => {
    // TODO: Navigate to edit frequency
    console.log("Edit frequency:", medicineId);
  };

  const handleEditTime = (medicineId: string, timeId: string) => {
    // TODO: Show time picker
    console.log("Edit time:", medicineId, timeId);
  };

  const handleAddTime = (medicineId: string) => {
    // TODO: Show time picker to add new time
    console.log("Add time:", medicineId);
  };

  const handleEditInstruction = (medicineId: string, instructionId: string) => {
    // TODO: Edit instruction
    console.log("Edit instruction:", medicineId, instructionId);
  };

  const handleDeleteInstruction = (
    medicineId: string,
    instructionId: string
  ) => {
    // TODO: Implement instruction deletion in store
    console.log("Delete instruction:", medicineId, instructionId);
  };

  const handleAddInstruction = (medicineId: string) => {
    // TODO: Add instruction modal
    console.log("Add instruction:", medicineId);
  };

  const handleEditDetails = (medicineId: string) => {
    router.push(`/edit-medicine?id=${medicineId}`);
  };

  const handleAddNote = (medicineId: string) => {
    // TODO: Add note modal
    console.log("Add note:", medicineId);
  };

  const handleAddMedicineManually = () => {
    router.push("/edit-medicine");
  };

  const handleConfirmSchedule = () => {
    if (medicines.length === 0) {
      Alert.alert(
        "No Medicines",
        "Please add at least one medicine to your schedule."
      );
      return;
    }
    bulkCreateMutation.mutate(medicines);
  };

  return (
    <SafeAreaView
      className="flex-1 bg-background dark:bg-neutral-900"
      edges={["top"]}
    >
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3">
        <TouchableOpacity
          onPress={handleBack}
          className="w-10 h-10 items-center justify-center"
          activeOpacity={0.7}
        >
          <ChevronLeft size={24} color={isDark ? "#F5F5F5" : "#171717"} />
        </TouchableOpacity>
        <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold">
          Confirm Medicine Schedule
        </Text>
        <TouchableOpacity
          onPress={handleHelp}
          className="w-10 h-10 items-center justify-center"
          activeOpacity={0.7}
        >
          <CircleHelp size={22} color="#4CD964" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1 px-4"
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Summary */}
        <Text className="text-sm text-neutral-600 dark:text-neutral-400 font-poppins mb-4">
          {medicines.length > 0 ? (
            <>
              You have{" "}
              <Text className="font-poppins-bold text-neutral-900 dark:text-neutral-100">
                {medicines.length} medicine{medicines.length > 1 ? "s" : ""}
              </Text>{" "}
              in your schedule. Please verify the dosages and intake times
              below.
            </>
          ) : (
            "Add medicines to your schedule by tapping the button below."
          )}
        </Text>

        {/* Medicine Cards */}
        {displayMedicines.map((medicine) => (
          <MedicineCard
            key={medicine.id}
            id={medicine.id}
            name={medicine.name}
            dosage={medicine.dosage}
            frequency={medicine.frequency}
            intakeTimes={medicine.intakeTimes}
            instructions={medicine.instructions}
            onDelete={() => handleDeleteMedicine(medicine.id)}
            onEditDosage={() => handleEditDosage(medicine.id)}
            onEditFrequency={() => handleEditFrequency(medicine.id)}
            onEditTime={(timeId) => handleEditTime(medicine.id, timeId)}
            onAddTime={() => handleAddTime(medicine.id)}
            onEditInstruction={(instructionId) =>
              handleEditInstruction(medicine.id, instructionId)
            }
            onDeleteInstruction={(instructionId) =>
              handleDeleteInstruction(medicine.id, instructionId)
            }
            onAddInstruction={() => handleAddInstruction(medicine.id)}
            onEditDetails={() => handleEditDetails(medicine.id)}
            onAddNote={() => handleAddNote(medicine.id)}
          />
        ))}

        {/* Add Another Medicine Manually */}
        <TouchableOpacity
          onPress={handleAddMedicineManually}
          className="flex-row items-center justify-center py-4 border border-dashed border-neutral-300 dark:border-neutral-600 rounded-2xl"
          activeOpacity={0.7}
        >
          <Plus size={20} color={isDark ? "#A3A3A3" : "#6B7280"} />
          <Text className="text-base text-neutral-600 dark:text-neutral-400 font-poppins-medium ml-2">
            Add Another Medicine Manually
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Confirm Button */}
      <View className="absolute bottom-0 left-0 right-0 px-4 pb-8 pt-4 bg-background dark:bg-neutral-900">
        <Button
          onPress={handleConfirmSchedule}
          isLoading={bulkCreateMutation.isPending}
        >
          Confirm Schedule
        </Button>
      </View>
    </SafeAreaView>
  );
}
