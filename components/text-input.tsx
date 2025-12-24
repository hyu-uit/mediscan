import { useState } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface TextInputProps extends Omit<RNTextInputProps, "style"> {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  error?: string;
}

export function TextInput({
  label,
  leftIcon,
  rightIcon,
  onRightIconPress,
  error,
  onFocus,
  onBlur,
  ...props
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (error) return "border-red-500";
    if (isFocused) return "border-primary";
    return "border-neutral-200";
  };

  const handleFocus: RNTextInputProps["onFocus"] = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur: RNTextInputProps["onBlur"] = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <View className="w-full">
      {label && (
        <Text className="text-sm font-poppins-medium text-neutral-900 dark:text-neutral-100 mb-2">
          {label}
        </Text>
      )}

      <View
        className={`
          flex-row items-center
          bg-white dark:bg-neutral-800
          border rounded-xl
          px-4 py-3.5
          ${getBorderColor()}
        `}
      >
        {leftIcon && <View className="mr-3">{leftIcon}</View>}

        <RNTextInput
          className="flex-1 text-base font-poppins text-neutral-900 dark:text-neutral-100"
          placeholderTextColor="#9CA3AF"
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            disabled={!onRightIconPress}
            activeOpacity={onRightIconPress ? 0.7 : 1}
            className="ml-3"
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <Text className="text-sm font-poppins text-red-500 mt-1.5">
          {error}
        </Text>
      )}
    </View>
  );
}
