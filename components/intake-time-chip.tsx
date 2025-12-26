import { TimeSlotId, useTimeSlotColor } from "@/stores/color-store";
import { Clock } from "lucide-react-native";
import { Text, View } from "react-native";

interface IntakeTimeChipProps {
  time: string;
  type?: TimeSlotId;
}

export function IntakeTimeChip({ time, type }: IntakeTimeChipProps) {
  // Use store colors if type is provided, otherwise use neutral colors
  const { color, bgColor } = useTimeSlotColor(type || "MORNING");
  const hasType = !!type;

  return (
    <View
      className="flex-row items-center self-start px-4 py-3"
      style={{
        borderRadius: 8,
        backgroundColor: hasType ? bgColor : undefined,
        borderWidth: hasType ? 0 : 1,
        borderColor: "#E5E5E5",
      }}
    >
      <Clock size={16} color={hasType ? color : "#6B7280"} />
      <Text
        className="text-base font-poppins-semibold ml-2"
        style={{ color: hasType ? color : "#525252" }}
      >
        {time}
      </Text>
    </View>
  );
}
