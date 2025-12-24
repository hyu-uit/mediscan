import { Button } from "@/components/button";
import { MedicineCard } from "@/components/medicine-card";
import { router } from "expo-router";
import { ChevronLeft, CircleHelp, Plus } from "lucide-react-native";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock data for extracted medicines
const INITIAL_MEDICINES = [
  {
    id: "1",
    name: "Amoxicillin",
    dosage: "500mg",
    frequency: "3x Daily",
    intakeTimes: [
      { id: "1-1", time: "08:00 AM" },
      { id: "1-2", time: "02:00 PM" },
      { id: "1-3", time: "08:00 PM" },
    ],
    instructions: [{ id: "i1", text: "Take with food", icon: "food" as const }],
  },
  {
    id: "2",
    name: "Prednisone",
    dosage: "10mg",
    frequency: "1x Daily",
    intakeTimes: [{ id: "2-1", time: "09:00 AM" }],
    instructions: [],
  },
];

export function ConfirmScheduleScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const [medicines, setMedicines] = useState(INITIAL_MEDICINES);

  const handleBack = () => {
    router.back();
  };

  const handleHelp = () => {
    // TODO: Show help content
    console.log("Help pressed");
  };

  const handleDeleteMedicine = (medicineId: string) => {
    setMedicines((prev) => prev.filter((m) => m.id !== medicineId));
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
    setMedicines((prev) =>
      prev.map((m) =>
        m.id === medicineId
          ? {
              ...m,
              instructions: m.instructions.filter((i) => i.id !== instructionId),
            }
          : m
      )
    );
  };

  const handleAddInstruction = (medicineId: string) => {
    // TODO: Add instruction modal
    console.log("Add instruction:", medicineId);
  };

  const handleEditDetails = (medicineId: string) => {
    // TODO: Navigate to edit medicine screen
    console.log("Edit details:", medicineId);
  };

  const handleAddNote = (medicineId: string) => {
    // TODO: Add note modal
    console.log("Add note:", medicineId);
  };

  const handleAddMedicineManually = () => {
    // TODO: Navigate to add medicine screen
    console.log("Add medicine manually");
  };

  const handleConfirmSchedule = () => {
    // TODO: Save medicines to schedule
    console.log("Confirming schedule:", medicines);
    router.replace("/(tabs)");
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
          We extracted{" "}
          <Text className="font-poppins-bold text-neutral-900 dark:text-neutral-100">
            {medicines.length} medicines
          </Text>{" "}
          from your scan. Please verify the dosages and intake times below.
        </Text>

        {/* Medicine Cards */}
        {medicines.map((medicine) => (
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
        <Button onPress={handleConfirmSchedule}>Confirm Schedule</Button>
      </View>
    </SafeAreaView>
  );
}

