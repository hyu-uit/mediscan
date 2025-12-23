import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Camera } from "lucide-react-native";
import { Pressable, Text, View, useWindowDimensions } from "react-native";

interface WelcomeScreenProps {
  onStartScanning?: () => void;
  onSignIn?: () => void;
}

export function WelcomeScreen({
  onStartScanning,
  onSignIn,
}: WelcomeScreenProps) {
  const { height } = useWindowDimensions();

  return (
    <View className="flex-1 bg-white dark:bg-neutral-900">
      {/* Hero Image */}
      <View
        className="w-full overflow-hidden"
        style={{ height: height * 0.45 }}
      >
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9jGEq_khVNauTUcvACOi87msJ5jfoIgTF8RSnB8cQx9kM1FGhVxINaWQBaGJL3ojhlk5lom7nudgi_e4Cgzhhd9q6lmsjeIECyWaDIjlswXicv59S87Q03os6rOsgpzi-L-Y4iS7ea3M2acJah40zgmaJOwiS1KleO2ptRTG9uPVS6f1sa-jF6KKCDkAHfH2T2RoUFraxqO_7x8C2_Io2ijqOysdrtorW3YFxgjnG1m8b8yECcIA2Ofq9-GmVpHDJLig-M6inob8",
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
          contentFit="cover"
        />
        <LinearGradient
          colors={[
            "transparent",
            "rgba(255,255,255,0.05)",
            "rgba(255,255,255,0.15)",
            "rgba(255,255,255,0.35)",
            "rgba(255,255,255,0.65)",
            "rgba(255,255,255,0.85)",
            "#ffffff",
          ]}
          locations={[0, 0.15, 0.3, 0.5, 0.7, 0.85, 1]}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
          }}
        />
      </View>

      {/* Content */}
      <View className="flex-1 px-8 pt-10 pb-12 items-center">
        <Text className="text-3xl text-center leading-10 mb-4 text-neutral-900 dark:text-neutral-100 font-poppins-bold">
          Welcome to{"\n"}MediScan
        </Text>

        <Text className="text-base leading-6 text-center mb-10 text-neutral-500 dark:text-neutral-400 font-poppins-medium">
          The easiest way to remember your medicine. Scan to start and never
          miss a dose again.
        </Text>

        {/* Primary CTA Button */}
        <Pressable
          className="flex-row items-center justify-center w-full py-4 px-6 rounded-xl gap-2 bg-primary active:opacity-90"
          onPress={onStartScanning}
        >
          <Camera size={22} color="#171717" />
          <Text className="text-lg text-neutral-900 font-poppins-semibold">
            Start Scanning
          </Text>
        </Pressable>

        {/* Secondary Link */}
        <Pressable className="mt-5 py-3" onPress={onSignIn}>
          <Text className="text-base text-neutral-900 dark:text-neutral-100 font-poppins-medium">
            I already have an account
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
