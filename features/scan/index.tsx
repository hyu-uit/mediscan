import { ScanPreview } from "@/components/scan-preview";
import { ScanTapCard } from "@/components/scan-tap-card";
import { router } from "expo-router";
import { PenLine, X } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ScanScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const [isScanning, setIsScanning] = useState(false);

  const handleTapToScan = () => {
    setIsScanning(true);
  };

  const handleCapture = (uri: string) => {
    // TODO: Process captured image with OCR
    console.log("Captured image:", uri);
    setIsScanning(false);
    // Navigate to confirm schedule screen
    router.replace("/confirm-schedule");
  };

  const handleGallery = () => {
    // TODO: Open image picker and process result
    console.log("Gallery pressed");
    // For now, navigate to confirm schedule as if image was selected
    router.replace("/confirm-schedule");
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
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <View className="w-10" />
        <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold">
          Add Prescription
        </Text>
        <TouchableOpacity
          onPress={handleClose}
          className="w-10 h-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800"
        >
          <X size={20} color={isDark ? "#F5F5F5" : "#171717"} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="flex-1 px-6">
        {/* Scan Section */}
        <View className="mb-6">
          <Text className="text-xl text-center text-neutral-900 dark:text-neutral-100 font-poppins-bold mb-1">
            {isScanning ? "Scan Prescription" : "Capture Prescription"}
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
              className="flex-row items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-2xl py-4"
            >
              <PenLine size={20} color={isDark ? "#F5F5F5" : "#171717"} />
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
