import { Colors } from "@/constants/theme";
import { ImagePlus, ScanLine } from "lucide-react-native";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";

interface ScanTapCardProps {
  onTapToScan?: () => void;
  onUploadFromGallery?: () => void;
}

export function ScanTapCard({
  onTapToScan,
  onUploadFromGallery,
}: ScanTapCardProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View>
      {/* Tap to Scan Card */}
      <TouchableOpacity
        className="items-center justify-center py-8 mb-3 rounded-2xl bg-white dark:bg-neutral-800"
        style={{
          borderWidth: 2,
          borderColor: Colors.primaryBright,
          borderStyle: "dashed",
        }}
        onPress={onTapToScan}
      >
        <View className="w-16 h-16 rounded-2xl bg-primary-light items-center justify-center mb-3">
          <ScanLine size={32} color={Colors.primaryBright} />
        </View>
        <Text className="text-xl text-neutral-900 dark:text-neutral-100 font-poppins-bold mb-1">
          Tap to Scan
        </Text>
        <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins-medium text-center px-8">
          Use your camera to capture prescription details automatically
        </Text>
      </TouchableOpacity>

      {/* Upload from Gallery Button */}
      <TouchableOpacity
        className="flex-row items-center justify-center bg-white dark:bg-neutral-800 rounded-2xl py-4 shadow-xs"
        onPress={onUploadFromGallery}
      >
        <ImagePlus
          size={20}
          color={isDark ? Colors.text.primaryDark : Colors.text.primary}
        />
        <Text className="text-base text-neutral-900 dark:text-neutral-100 font-poppins-semibold ml-2">
          Upload from Gallery
        </Text>
      </TouchableOpacity>
    </View>
  );
}
