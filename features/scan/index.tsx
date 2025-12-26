import { scanPrescription } from "@/api/scan";
import { ScanPreview } from "@/components/scan-preview";
import { ScanTapCard } from "@/components/scan-tap-card";
import { Colors } from "@/constants/theme";
import { useScheduleStore } from "@/stores/schedule-store";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { PenLine } from "lucide-react-native";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ScanScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const [isScanning, setIsScanning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setMedicines } = useScheduleStore();

  /**
   * Process an image through the scan API
   */
  const handleScanImage = async (uri: string) => {
    setIsLoading(true);
    try {
      const result = await scanPrescription(uri);
      setMedicines(result.medications);
      router.replace("/confirm-schedule");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to scan prescription";
      console.log(error);
      Alert.alert("Scan Failed", message);
    } finally {
      setIsLoading(false);
      setIsScanning(false);
    }
  };

  const handleTapToScan = () => {
    setIsScanning(true);
  };

  const handleCapture = async (uri: string) => {
    await handleScanImage(uri);
  };

  const handleGallery = async () => {
    // Request permission
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission Required",
        "Please allow access to your photo library to upload prescriptions."
      );
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      await handleScanImage(result.assets[0].uri);
    }
  };

  const handleCancel = () => {
    setIsScanning(false);
  };

  const handleClose = () => {
    router.back();
  };

  const handleAddManually = () => {
    router.push("/confirm-schedule?openAddMedicine=true");
  };

  return (
    <SafeAreaView
      className="flex-1 bg-background dark:bg-neutral-900"
      edges={["top"]}
    >
      {/* Loading Overlay */}
      {isLoading && (
        <View className="absolute inset-0 z-50 bg-black/60 items-center justify-center">
          <View className="bg-white dark:bg-neutral-800 rounded-2xl p-6 items-center mx-8">
            <ActivityIndicator size="large" color={Colors.primaryBright} />
            <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold mt-4">
              Scanning Prescription
            </Text>
            <Text className="text-sm text-neutral-500 dark:text-neutral-400 font-poppins text-center mt-1">
              Extracting medication details...
            </Text>
          </View>
        </View>
      )}

      {/* Header */}
      {/* <View className="flex-row items-center justify-between px-6 py-4">
        <View className="w-10" />
        <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold">
          Add Prescription
        </Text>
        <TouchableOpacity
          onPress={handleClose}
          className="w-10 h-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800"
          disabled={isLoading}
        >
          <X
            size={20}
            color={isDark ? Colors.text.primaryDark : Colors.text.primary}
          />
        </TouchableOpacity>
      </View> */}

      {/* Content */}
      <View className="flex-1 px-6">
        {/* Scan Section */}
        <View className="mb-6">
          <Text className="text-xl text-center text-neutral-900 dark:text-neutral-100 font-poppins-bold mb-1">
            {isScanning ? "Scan Prescription" : "Add Prescription"}
          </Text>
          <Text className="text-sm text-center text-neutral-500 dark:text-neutral-400 font-poppins mb-4">
            {isScanning
              ? "Align the document within the frame"
              : "Use your camera or gallery to add a prescription"}
          </Text>

          {isScanning ? (
            <ScanPreview
              onCapture={handleCapture}
              onGallery={handleGallery}
              onCancel={handleCancel}
            />
          ) : (
            <ScanTapCard
              onTapToScan={handleTapToScan}
              onUploadFromGallery={handleGallery}
            />
          )}
        </View>

        {/* Add Manually Button - Only show when not scanning */}
        {!isScanning && (
          <View className="mt-2">
            <View className="flex-row items-center mb-4">
              <View className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
              <Text className="px-4 text-sm text-neutral-400 dark:text-neutral-500 font-poppins-medium">
                or
              </Text>
              <View className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
            </View>

            <TouchableOpacity
              onPress={handleAddManually}
              className="flex-row items-center justify-center bg-white dark:bg-neutral-800 rounded-2xl py-4"
              disabled={isLoading}
            >
              <PenLine
                size={20}
                color={isDark ? Colors.text.primaryDark : Colors.text.primary}
              />
              <Text className="text-base text-neutral-900 dark:text-neutral-100 font-poppins-semibold ml-2">
                Add Manually
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
