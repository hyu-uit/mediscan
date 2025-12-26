import { Colors } from "@/constants/theme";
import { ChevronRight, ExternalLink } from "lucide-react-native";
import { ReactNode } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

export type SettingsRowAction =
  | "chevron"
  | "toggle"
  | "badge"
  | "external"
  | "none";

export interface SettingsRowProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  action?: SettingsRowAction;
  badgeText?: string;
  badgeColor?: string;
  toggleValue?: boolean;
  onToggleChange?: (value: boolean) => void;
  onPress?: () => void;
  isLast?: boolean;
}

export function SettingsRow({
  icon,
  title,
  subtitle,
  action = "chevron",
  badgeText,
  badgeColor = Colors.primaryBright,
  toggleValue = false,
  onToggleChange,
  onPress,
  isLast = false,
}: SettingsRowProps) {
  const content = (
    <View
      className={`flex-row items-center px-4 py-3.5 ${
        !isLast ? "border-b border-neutral-100 dark:border-neutral-700" : ""
      }`}
    >
      {/* Icon */}
      <View className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-700 items-center justify-center mr-3">
        {icon}
      </View>

      {/* Content */}
      <View className="flex-1">
        <Text className="text-base text-neutral-900 dark:text-neutral-100 font-poppins-medium">
          {title}
        </Text>
        {subtitle && (
          <Text className="text-sm text-neutral-400 font-poppins mt-0.5">
            {subtitle}
          </Text>
        )}
      </View>

      {/* Action */}
      {action === "chevron" && (
        <ChevronRight size={20} color={Colors.icon.muted} />
      )}

      {action === "toggle" && (
        <Switch
          value={toggleValue}
          onValueChange={onToggleChange}
          trackColor={{
            false: Colors.ui.toggleTrackOff,
            true: Colors.primaryMuted,
          }}
          thumbColor={
            toggleValue ? Colors.primaryBright : Colors.backgroundWhite
          }
        />
      )}

      {action === "badge" && (
        <View className="flex-row items-center">
          <View
            className="px-2.5 py-1 rounded-xl mr-2"
            style={{ backgroundColor: `${badgeColor}20` }}
          >
            <Text
              className="text-xs font-poppins-semibold"
              style={{ color: badgeColor }}
            >
              {badgeText}
            </Text>
          </View>
          <ChevronRight size={20} color={Colors.icon.muted} />
        </View>
      )}

      {action === "external" && (
        <ExternalLink size={18} color={Colors.icon.muted} />
      )}
    </View>
  );

  if (action === "toggle" || action === "none") {
    return content;
  }

  return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
}
