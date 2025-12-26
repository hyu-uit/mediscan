import { Colors } from "@/constants/theme";
import { Pencil } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { FREQUENCY_TYPE_OPTIONS } from "../constants";
import { FrequencyType, FrequencyTypeValue, IntervalUnitType } from "../types";
import { getIntervalDisplayText } from "../utils";

interface FrequencySelectorProps {
  selectedType: FrequencyTypeValue;
  intervalValue: string;
  intervalUnit: IntervalUnitType;
  onSelectType: (type: FrequencyTypeValue) => void;
  onIntervalPress: () => void;
}

export function FrequencySelector({
  selectedType,
  intervalValue,
  intervalUnit,
  onSelectType,
  onIntervalPress,
}: FrequencySelectorProps) {
  return (
    <View className="mb-4">
      <Text className="text-sm font-poppins-medium text-neutral-900 dark:text-neutral-100 mb-3">
        Frequency
      </Text>
      <View className="gap-2">
        {FREQUENCY_TYPE_OPTIONS.map((option) => {
          const isSelected = selectedType === option.id;

          // For interval, show the result text when selected
          const displayDescription =
            option.id === FrequencyType.INTERVAL && isSelected
              ? getIntervalDisplayText(intervalValue, intervalUnit)
              : option.description;

          return (
            <Pressable
              key={option.id}
              onPress={() => {
                if (option.id === FrequencyType.INTERVAL) {
                  onIntervalPress();
                } else {
                  onSelectType(option.id);
                }
              }}
              className={`flex-row items-center px-4 py-3 rounded-xl border ${
                isSelected
                  ? "border-primary-bright bg-primary/5"
                  : "border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800"
              }`}
            >
              {/* Radio indicator */}
              <View
                className={`w-5 h-5 rounded-full border-2 mr-3 items-center justify-center ${
                  isSelected
                    ? "border-primary-bright"
                    : "border-neutral-300 dark:border-neutral-600"
                }`}
              >
                {isSelected && (
                  <View className="w-2.5 h-2.5 rounded-full bg-primary-bright" />
                )}
              </View>
              <View className="flex-1">
                <Text
                  className={`text-base font-poppins-semibold ${
                    isSelected
                      ? "text-primary-bright"
                      : "text-neutral-900 dark:text-neutral-100"
                  }`}
                >
                  {option.label}
                </Text>
                <Text
                  className={`text-xs font-poppins mt-0.5 ${
                    option.id === FrequencyType.INTERVAL && isSelected
                      ? "text-primary font-poppins-medium"
                      : "text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  {displayDescription}
                </Text>
              </View>
              {/* Edit button for interval when selected */}
              {option.id === FrequencyType.INTERVAL && isSelected && (
                <Pencil size={16} color={Colors.primary} />
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
