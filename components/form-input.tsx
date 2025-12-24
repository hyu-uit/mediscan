import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { TextInputProps } from "react-native";
import { TextInput } from "./text-input";

interface FormInputProps<T extends FieldValues>
  extends Omit<TextInputProps, "style" | "value" | "onChangeText"> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

export function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  leftIcon,
  rightIcon,
  onRightIconPress,
  ...props
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <TextInput
          label={label}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          onRightIconPress={onRightIconPress}
          error={error?.message}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          {...props}
        />
      )}
    />
  );
}
