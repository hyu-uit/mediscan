import { Colors } from "@/constants/theme";
import { useAuthStore } from "@/stores/auth-store";
import { router } from "expo-router";
import { Bell } from "lucide-react-native";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";

// Get time-based greeting
function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning,";
  if (hour >= 12 && hour < 17) return "Good Afternoon,";
  return "Good Evening,";
}

export function Header() {
  const { user } = useAuthStore();
  const greeting = getGreeting();
  const initial = user?.name?.charAt(0).toUpperCase();
  const theme = useColorScheme();
  const handleNotificationPress = () => {
    router.push("/notification" as never);
  };

  return (
    <View className="flex-row items-center justify-between px-6 pt-4 mb-6">
      <View className="flex-row items-center">
        {/* Avatar */}
        {/* {user?.imageUrl ? (
          <Image
            source={{ uri: user.imageUrl }}
            className="w-12 h-12 rounded-full mr-3"
          />
        ) : ( */}
        <View className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 items-center justify-center mr-3">
          <Text className="text-lg font-poppins-semibold text-neutral-500 dark:text-neutral-400">
            {initial}
          </Text>
        </View>
        {/* )} */}
        {/* Greeting */}
        <View>
          <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins">
            {greeting}
          </Text>
          <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold">
            {user?.name}
          </Text>
        </View>
      </View>

      {/* Notification Bell */}
      <TouchableOpacity
        className="w-10 h-10 rounded-full bg-iconBg dark:bg-neutral-800 items-center justify-center shadow-xs"
        onPress={handleNotificationPress}
      >
        <Bell
          size={20}
          color={theme === "dark" ? Colors.icon.light : Colors.icon.dark}
        />
      </TouchableOpacity>
    </View>
  );
}
