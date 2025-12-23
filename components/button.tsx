import { Text, TouchableOpacity, View } from "react-native";

type ButtonVariant = "primary" | "secondary" | "text" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onPress?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variantStyles: Record<
  ButtonVariant,
  { container: string; text: string }
> = {
  primary: {
    container: "bg-primary",
    text: "text-neutral-900",
  },
  secondary: {
    container: "bg-neutral-100 dark:bg-neutral-800",
    text: "text-neutral-900 dark:text-neutral-100",
  },
  text: {
    container: "bg-transparent",
    text: "text-neutral-900 dark:text-neutral-100",
  },
  outline: {
    container:
      "bg-transparent border-2 border-neutral-300 dark:border-neutral-600",
    text: "text-neutral-900 dark:text-neutral-100",
  },
  danger: {
    container: "bg-red-500",
    text: "text-white",
  },
};

const sizeStyles: Record<ButtonSize, { container: string; text: string }> = {
  sm: {
    container: "py-2 px-4 rounded-full gap-1.5",
    text: "text-sm",
  },
  md: {
    container: "py-3 px-5 rounded-full gap-2",
    text: "text-base",
  },
  lg: {
    container: "py-4 px-6 rounded-full gap-2",
    text: "text-lg",
  },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  onPress,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = "left",
}: ButtonProps) {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  return (
    <TouchableOpacity
      className={`
        flex-row items-center justify-center
        ${sizeStyle.container}
        ${variantStyle.container}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50" : ""}
      `}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      {icon && iconPosition === "left" && <View>{icon}</View>}
      <Text
        className={`
          font-poppins-semibold
          ${sizeStyle.text}
          ${variantStyle.text}
        `}
      >
        {children}
      </Text>
      {icon && iconPosition === "right" && <View>{icon}</View>}
    </TouchableOpacity>
  );
}
