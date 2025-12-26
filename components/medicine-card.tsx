import { Button } from "@/components/button";
import { InstructionItem } from "@/components/instruction-item";
import { IntakeTimeChip } from "@/components/intake-time-chip";
import { MedicineBadge } from "@/components/medicine-badge";
import { Colors } from "@/constants/theme";
import { IntakeTime } from "@/features/edit-medicine/types";
import { NotebookPen, Pill, Trash2 } from "lucide-react-native";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";

interface Instruction {
  id: string;
  text: string;
}

interface MedicineCardProps {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  intakeTimes: IntakeTime[];
  instructions: Instruction[];
  onDelete?: () => void;
  onEditDosage?: () => void;
  onEditFrequency?: () => void;
  onEditTime?: (timeId: string) => void;
  onAddTime?: () => void;
  onEditInstruction?: (instructionId: string) => void;
  onDeleteInstruction?: (instructionId: string) => void;
  onAddInstruction?: () => void;
  onEditDetails?: () => void;
  onAddNote?: () => void;
}

export function MedicineCard({
  name,
  dosage,
  frequency,
  intakeTimes,
  instructions,
  onDelete,
  onEditDosage,
  onEditFrequency,
  onEditTime,
  onAddTime,
  onEditInstruction,
  onDeleteInstruction,
  onAddInstruction,
  onEditDetails,
  onAddNote,
}: MedicineCardProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View className="bg-white dark:bg-neutral-800 rounded-2xl p-4 mb-4 shadow-xs">
      {/* Header: Icon - Name/Badges - Trash */}
      <View className="flex-row items-start">
        {/* Medicine Icon - Square rounded, light green bg, primary green icon */}
        <View className="w-12 h-12 rounded-xl border-[0.2px] border-primary bg-primary-light items-center justify-center mr-3">
          <Pill size={24} color={Colors.primaryBright} />
        </View>

        {/* Name and Badges */}
        <View className="flex-1">
          <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold mb-2">
            {name}
          </Text>
          <View className="flex-row items-center">
            <MedicineBadge
              text={dosage}
              color={Colors.icon.default}
              onPress={onEditDosage}
            />
            <View className="w-2" />
            <MedicineBadge
              text={frequency}
              color={Colors.status.info}
              onPress={onEditFrequency}
            />
          </View>
        </View>

        {/* Delete Button */}
        <TouchableOpacity
          onPress={onDelete}
          className="p-2"
          activeOpacity={0.7}
        >
          <Trash2
            size={20}
            color={isDark ? Colors.icon.default : Colors.icon.muted}
          />
        </TouchableOpacity>
      </View>

      {/* Divider after header */}
      <View className="h-px bg-neutral-100 dark:bg-neutral-700 my-4" />

      {/* Suggested Intake Times */}
      <View className="mb-4">
        <Text className="text-xs text-neutral-500 dark:text-neutral-400 font-poppins-bold tracking-wide mb-3">
          SUGGESTED INTAKE TIMES
        </Text>
        <View className="gap-2">
          {intakeTimes.map((intake) => (
            <IntakeTimeChip
              key={intake.id}
              time={intake.time}
              type={intake.type}
            />
          ))}
        </View>
      </View>

      {/* Instructions - only show if there are instructions */}
      {instructions.length > 0 && (
        <View className="mb-4">
          <Text className="text-xs text-neutral-500 dark:text-neutral-400 font-poppins-bold tracking-wide mb-3">
            INSTRUCTIONS
          </Text>
          <View className="gap-2">
            {instructions.map((instruction) => (
              <InstructionItem
                key={instruction.id}
                instruction={instruction.text}
              />
            ))}
          </View>
        </View>
      )}

      {/* Divider */}
      <View className="h-px bg-neutral-100 dark:bg-neutral-700 mb-3" />

      {/* Edit Details Button */}
      <Button
        variant="secondary"
        fullWidth
        onPress={onEditDetails}
        icon={
          <NotebookPen
            size={18}
            color={isDark ? Colors.icon.light : Colors.icon.dark}
          />
        }
      >
        Edit Details
      </Button>
    </View>
  );
}
