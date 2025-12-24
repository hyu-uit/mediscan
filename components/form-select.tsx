import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Text, View } from "react-native";
import { Select, SelectOption } from "./select";

interface FormSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options: SelectOption[];
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

export function FormSelect<T extends FieldValues>({
  control,
  name,
  options,
  label,
  placeholder,
  disabled,
}: FormSelectProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View>
          <Select
            value={value}
            onValueChange={onChange}
            options={options}
            label={label}
            placeholder={placeholder}
            disabled={disabled}
          />
          {error && (
            <Text className="text-sm font-poppins text-red-500 mt-1.5">
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
}
