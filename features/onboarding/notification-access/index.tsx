import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, ArrowRight, Bell, CircleAlert, Pill } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { DecorativeBell } from "./decorative-bell";
import { FeatureItem } from "./feature-item";

interface NotificationAccessScreenProps {
  onBack?: () => void;
  onEnableNotifications?: () => void;
  onMaybeLater?: () => void;
}

export function NotificationAccessScreen({
  onBack,
  onEnableNotifications,
  onMaybeLater,
}: NotificationAccessScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-surface dark:bg-neutral-900">
      {/* Gradient Background */}
      <LinearGradient
        colors={["#E8FFF0", "#F0FFF5", "#F6F8F6"]}
        locations={[0, 0.4, 0.7]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "60%",
        }}
      />

      <View
        className="flex-1 px-8 pb-12"
        style={{ paddingTop: insets.top + 16 }}
      >
        {/* Back Button */}
        <Pressable
          className="w-10 h-10 items-center justify-center -ml-2"
          onPress={onBack}
        >
          <ArrowLeft size={24} color="#171717" />
        </Pressable>

        {/* Scrollable Content Area */}
        <View className="flex-1">
          {/* Illustration Container */}
          <View className="items-center justify-center py-8">
            {/* Decorative bells around the main circle */}
            <View className="absolute top-4 left-4">
              <DecorativeBell size={20} />
            </View>
            <View className="absolute top-0 right-8">
              <DecorativeBell size={16} badge />
            </View>
            <View className="absolute bottom-16 left-0">
              <DecorativeBell size={14} />
            </View>
            <View className="absolute bottom-8 right-0">
              <DecorativeBell size={18} badge />
            </View>

            {/* Outer dashed circle */}
            <View
              className="w-48 h-48 rounded-full items-center justify-center"
              style={{
                borderWidth: 2,
                borderColor: "#36EC3740",
                borderStyle: "dashed",
              }}
            >
              {/* Inner circle with bell */}
              <View className="w-32 h-32 rounded-full bg-white items-center justify-center shadow-lg">
                <Bell size={48} color="#36EC37" />
              </View>

              {/* Decorative dots */}
              <View className="absolute top-2 left-8 w-2 h-2 rounded-full bg-primary opacity-60" />
              <View className="absolute top-8 right-4 w-1.5 h-1.5 rounded-full bg-primary opacity-40" />
              <View className="absolute bottom-6 left-4 w-1.5 h-1.5 rounded-full bg-primary opacity-50" />
              <View className="absolute bottom-2 right-8 w-2 h-2 rounded-full bg-primary opacity-30" />
            </View>
          </View>

          {/* Content */}
          <View className="items-center">
            <Text className="text-3xl text-center leading-10 mb-4 text-neutral-900 dark:text-neutral-100 font-poppins-bold">
              Don't miss a <Text className="text-primary">pill</Text>
            </Text>

            <Text className="text-base leading-6 text-center mb-6 text-neutral-500 dark:text-neutral-400 font-poppins-medium">
              Timely reminders are the heart of this app. Enable notifications
              to ensure you take your medication exactly when prescribed.
            </Text>
          </View>

          {/* Feature List */}
          <View className="bg-white dark:bg-neutral-800 rounded-2xl px-4 py-2 shadow-xs">
            <FeatureItem
              icon={<Bell size={20} color="#36EC37" />}
              title="Daily Reminders"
              description="Get alerted at your specific times"
            />
            <FeatureItem
              icon={<CircleAlert size={20} color="#EF4444" />}
              title="Escalating Alerts"
              description="We'll nudge harder if you forget"
            />
            <FeatureItem
              icon={<Pill size={20} color="#3B82F6" />}
              title="Refill Warnings"
              description="Know before you run out"
            />
          </View>
        </View>

        {/* Bottom Buttons */}
        {/* Primary CTA Button */}
        <Pressable
          className="flex-row items-center justify-center w-full py-4 px-6 rounded-xl gap-2 bg-primary active:opacity-90"
          onPress={onEnableNotifications}
        >
          <Text className="text-lg text-neutral-900 font-poppins-semibold">
            Enable Notifications
          </Text>
          <ArrowRight size={20} color="#171717" />
        </Pressable>

        {/* Secondary Link */}
        <Pressable className="mt-5 py-3 items-center" onPress={onMaybeLater}>
          <Text className="text-base text-neutral-900 dark:text-neutral-100 font-poppins-medium">
            Maybe later
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

