import { Image } from "expo-image";
import { Text, View } from "react-native";

interface MedicineHeaderProps {
  name: string;
  category?: string;
}

export function MedicineHeader({
  name,
  category = "Antibiotic",
}: MedicineHeaderProps) {
  return (
    <View className="flex-row items-center mb-6">
      <View className="w-16 h-16 rounded-2xl overflow-hidden mr-4 bg-neutral-100">
        <Image
          source={require("@/assets/images/icon.png")}
          style={{ width: 64, height: 64 }}
          contentFit="cover"
        />
      </View>
      <View className="flex-1">
        <Text className="text-xl text-neutral-900 dark:text-neutral-100 font-poppins-bold">
          {name}
        </Text>
        <View className="flex-row items-center mt-1">
          <View className="bg-primary/10 px-2 py-1 rounded-md mr-2">
            <Text className="text-xs text-primary font-poppins-semibold">
              💊 {category}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
