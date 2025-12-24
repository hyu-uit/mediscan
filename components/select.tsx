import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ChevronDown } from "lucide-react-native";
import { useCallback, useMemo, useRef } from "react";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  value?: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}

export function Select({
  value,
  onValueChange,
  options,
  placeholder = "Select an option",
  label,
  disabled = false,
}: SelectProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["50%"], []);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleOpen = useCallback(() => {
    if (!disabled) {
      bottomSheetModalRef.current?.present();
    }
  }, [disabled]);

  const handleClose = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const handleSelect = useCallback(
    (optionValue: string) => {
      onValueChange(optionValue);
      handleClose();
    },
    [onValueChange, handleClose]
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

  const renderItem = useCallback(
    ({ item }: { item: SelectOption }) => {
      const isSelected = item.value === value;
      return (
        <TouchableOpacity
          onPress={() => handleSelect(item.value)}
          className={`py-4 px-4 rounded-xl mb-1 ${
            isSelected ? "bg-primary/10" : "bg-transparent"
          }`}
          activeOpacity={0.7}
        >
          <Text
            className={`text-base font-poppins ${
              isSelected
                ? "text-primary font-poppins-semibold"
                : "text-neutral-700 dark:text-neutral-300"
            }`}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      );
    },
    [value, handleSelect]
  );

  return (
    <>
      <View className="w-full">
        {label && (
          <Text className="text-sm font-poppins-medium text-neutral-900 dark:text-neutral-100 mb-2">
            {label}
          </Text>
        )}

        <TouchableOpacity
          onPress={handleOpen}
          disabled={disabled}
          className={`
            flex-row items-center justify-between
            bg-white dark:bg-neutral-800
            border rounded-xl
            px-4 py-3.5
            border-neutral-200 dark:border-neutral-700
            ${disabled ? "opacity-50" : ""}
          `}
          activeOpacity={disabled ? 1 : 0.7}
        >
          <Text
            className={`flex-1 text-base font-poppins ${
              selectedOption
                ? "text-neutral-900 dark:text-neutral-100"
                : "text-neutral-400 dark:text-neutral-500"
            }`}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </Text>
          <ChevronDown size={20} color={disabled ? "#9CA3AF" : "#6B7280"} />
        </TouchableOpacity>
      </View>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
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
        <BottomSheetView className="flex-1">
          <View className="px-6 pt-4 pb-2">
            <Text className="text-xl text-neutral-900 dark:text-neutral-100 font-poppins-bold">
              {label || "Select an option"}
            </Text>
          </View>
          <BottomSheetFlatList
            data={options}
            renderItem={renderItem}
            keyExtractor={(item: SelectOption) => item.value}
            contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 48 }}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}
