import { Button } from "@/components/button";
import { Colors } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, Phone, PhoneCall, PhoneOff } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { DecorativePhone } from "./decorative-phone";

interface EmergencyAccessScreenProps {
  onBack?: () => void;
  onEnablePhoneCalls?: () => void;
  onSkip?: () => void;
}

export function EmergencyAccessScreen({
  onBack,
  onEnablePhoneCalls,
  onSkip,
}: EmergencyAccessScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-background dark:bg-neutral-900">
      {/* Gradient Background */}
      <LinearGradient
        colors={[Colors.primaryLight, "#FFF5F7", Colors.background]}
        locations={[0, 0.4, 0.7]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "60%",
        }}
      />

      <View className="flex-1 px-8 pb-12" style={{ paddingTop: insets.top }}>
        {/* Back Button */}
        <Pressable
          className="w-10 h-10 items-center justify-center -ml-2"
          onPress={onBack}
        >
          <ArrowLeft size={24} color={Colors.text.primary} />
        </Pressable>

        {/* Scrollable Content Area */}
        <View className="flex-1">
          {/* Illustration Container */}
          <View className="items-center justify-center py-8">
            {/* Decorative phones around the main circle */}
            <View className="absolute top-4 left-4">
              <DecorativePhone size={20} />
            </View>
            <View className="absolute top-0 right-8">
              <DecorativePhone size={16} badge />
            </View>
            <View className="absolute bottom-16 left-0">
              <DecorativePhone size={14} />
            </View>
            <View className="absolute bottom-8 right-0">
              <DecorativePhone size={18} badge />
            </View>

            {/* Outer dashed circle */}
            <View
              className="w-48 h-48 rounded-full items-center justify-center"
              style={{
                borderWidth: 2,
                borderColor: `${Colors.primaryBright}40`,
                borderStyle: "dashed",
              }}
            >
              {/* Inner circle with phone */}
              <View className="w-32 h-32 rounded-full bg-white items-center justify-center shadow-lg">
                <PhoneOff size={48} color={Colors.primaryBright} />
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
              Emergency Backup
            </Text>

            <Text className="text-base leading-6 text-center mb-6 text-neutral-500 dark:text-neutral-400 font-poppins-medium">
              We use phone calls only when you miss a critical notification.
              This ensures you never accidentally skip your medication. We
              respect your privacy and won't call for any other reason.
            </Text>
          </View>

          {/* Incoming Call Preview Card */}
          <View className="bg-white dark:bg-neutral-800 rounded-2xl px-5 py-4 shadow-xs">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="w-12 h-12 rounded-full bg-primary-light items-center justify-center">
                  <Phone size={24} color={Colors.primaryBright} />
                </View>
                <View>
                  <Text className="text-xs text-primary font-poppins-semibold uppercase tracking-wider">
                    Incoming Call
                  </Text>
                  <Text className="text-base text-neutral-900 dark:text-neutral-100 font-poppins-semibold">
                    Critical Med Reminder
                  </Text>
                </View>
              </View>
              <View className="flex-row gap-3">
                <View className="w-10 h-10 rounded-full bg-red-100 items-center justify-center">
                  <PhoneOff size={18} color={Colors.status.error} />
                </View>
                <View className="w-10 h-10 rounded-full bg-primary items-center justify-center">
                  <PhoneCall size={18} color="#ffffff" />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom Buttons */}
        <Button
          fullWidth
          size="lg"
          icon={<Phone size={20} color={Colors.text.primary} />}
          onPress={onEnablePhoneCalls}
        >
          Enable Phone Calls
        </Button>

        {/* Secondary Link */}
        <View className="mt-5 items-center">
          <Button variant="text" onPress={onSkip}>
            Skip for now
          </Button>
        </View>
      </View>
    </View>
  );
}
