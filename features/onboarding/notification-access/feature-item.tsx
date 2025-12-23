import { Text, View } from "react-native";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <View className="flex-row items-center gap-4 py-3">
      <View className="w-10 h-10 rounded-full bg-primary-light items-center justify-center">
        {icon}
      </View>
      <View className="flex-1">
        <Text className="text-base text-neutral-900 dark:text-neutral-100 font-poppins-semibold">
          {title}
        </Text>
        <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins">
          {description}
        </Text>
      </View>
    </View>
  );
}

