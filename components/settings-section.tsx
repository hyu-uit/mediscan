import { ReactNode } from "react";
import { Text, View } from "react-native";

export interface SettingsSectionProps {
  title: string;
  children: ReactNode;
}

export function SettingsSection({ title, children }: SettingsSectionProps) {
  return (
    <View className="mb-6">
      <Text className="text-xs text-neutral-500 dark:text-neutral-400 font-poppins-semibold tracking-widest uppercase mb-3 px-1">
        {title}
      </Text>
      <View className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden">
        {children}
      </View>
    </View>
  );
}
