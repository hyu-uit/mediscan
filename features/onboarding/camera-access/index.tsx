import { Button } from "@/components/button";
import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import { ArrowLeft, Camera, Lock } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CameraAccessScreenProps {
  onBack?: () => void;
  onEnableCamera?: () => void;
  onTypeManually?: () => void;
}

export function CameraAccessScreen({
  onBack,
  onEnableCamera,
  onTypeManually,
}: CameraAccessScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-background dark:bg-neutral-900 px-8 pb-12"
      style={{ paddingTop: insets.top }}
    >
      {/* Back Button */}
      <Pressable
        className="w-10 h-10 items-center justify-center -ml-2"
        onPress={onBack}
      >
        <ArrowLeft size={24} color={Colors.text.primary} />
      </Pressable>
      {/* Illustration Container */}
      <View className="flex-1 items-center justify-center">
        {/* Outer dashed circle */}
        <View
          className="w-64 h-64 rounded-full items-center justify-center"
          style={{
            borderWidth: 2,
            borderColor: `${Colors.primary}40`,
            borderStyle: "dashed",
          }}
        >
          {/* Inner circle with image */}
          <View className="w-48 h-48 rounded-full bg-primary-light items-center justify-center overflow-hidden">
            <Image
              source={require("@/assets/images/onboarding-camera.png")}
              style={{ width: 140, height: 140 }}
              contentFit="contain"
            />
          </View>

          {/* Camera badge */}
          <View className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary items-center justify-center">
            <Camera size={20} color="#ffffff" />
          </View>
        </View>
      </View>

      {/* Content */}
      <View className="items-center">
        <Text className="text-3xl text-center leading-10 mb-4 text-neutral-900 dark:text-neutral-100 font-poppins-bold">
          Scan Your{"\n"}Prescriptions
        </Text>

        <Text className="text-base leading-6 text-center mb-10 text-neutral-500 dark:text-neutral-400 font-poppins-medium">
          We use your camera to read the details on your prescription bottles so
          you don't have to type them in manually.
        </Text>

        {/* Primary CTA Button */}
        <Button fullWidth size="lg" onPress={onEnableCamera}>
          Enable Camera Access
        </Button>

        {/* Secondary Link */}
        <View className="mt-5">
          <Button variant="text" onPress={onTypeManually}>
            Type Manually
          </Button>
        </View>

        {/* Privacy Notice */}
        <View className="flex-row items-center mt-6 gap-2">
          <Lock size={14} color={Colors.icon.muted} />
          <Text className="text-sm text-neutral-400 font-poppins">
            Your photos are processed privately and not shared
          </Text>
        </View>
      </View>
    </View>
  );
}
