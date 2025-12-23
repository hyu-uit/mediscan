import { CameraView, useCameraPermissions } from "expo-camera";
import { Camera, Images, X } from "lucide-react-native";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ScanPreviewProps {
  onCapture?: (uri: string) => void;
  onGallery?: () => void;
  onCancel?: () => void;
}

export function ScanPreview({
  onCapture,
  onGallery,
  onCancel,
}: ScanPreviewProps) {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [flashEnabled, setFlashEnabled] = useState(false);

  const handleCapture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      if (photo?.uri) {
        onCapture?.(photo.uri);
      }
    }
  };

  const handleToggleCancel = () => {
    onCancel?.();
  };

  // Permission not determined yet
  if (!permission) {
    return (
      <View className="h-[400px] bg-neutral-800 rounded-2xl items-center justify-center">
        <Text className="text-white font-poppins">Loading camera...</Text>
      </View>
    );
  }

  // Permission denied
  if (!permission.granted) {
    return (
      <View className="h-[400px] bg-neutral-800 rounded-2xl items-center justify-center px-6">
        <Text className="text-white font-poppins-bold text-lg mb-2 text-center">
          Camera Access Required
        </Text>
        <Text className="text-neutral-400 font-poppins text-center mb-4">
          We need camera access to scan your prescriptions
        </Text>
        <TouchableOpacity
          className="bg-primary px-6 py-3 rounded-xl"
          onPress={requestPermission}
        >
          <Text className="text-neutral-900 font-poppins-semibold">
            Grant Permission
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      {/* Camera Preview with Frame */}
      <View className="rounded-2xl overflow-hidden mb-4">
        <View className="h-[450px] bg-neutral-800 relative">
          {/* Real Camera View */}
          <CameraView
            ref={cameraRef}
            style={{ width: "100%", height: "100%" }}
            facing="back"
            flash={flashEnabled ? "on" : "off"}
          />

          {/* Scanning Frame Overlay */}
          <View className="absolute inset-4">
            {/* Top Left Corner */}
            <View className="absolute top-0 left-0 w-8 h-8">
              <View className="absolute top-0 left-0 w-8 h-1 bg-primary rounded-full" />
              <View className="absolute top-0 left-0 w-1 h-8 bg-primary rounded-full" />
            </View>
            {/* Top Right Corner */}
            <View className="absolute top-0 right-0 w-8 h-8">
              <View className="absolute top-0 right-0 w-8 h-1 bg-primary rounded-full" />
              <View className="absolute top-0 right-0 w-1 h-8 bg-primary rounded-full" />
            </View>
            {/* Bottom Left Corner */}
            <View className="absolute bottom-0 left-0 w-8 h-8">
              <View className="absolute bottom-0 left-0 w-8 h-1 bg-primary rounded-full" />
              <View className="absolute bottom-0 left-0 w-1 h-8 bg-primary rounded-full" />
            </View>
            {/* Bottom Right Corner */}
            <View className="absolute bottom-0 right-0 w-8 h-8">
              <View className="absolute bottom-0 right-0 w-8 h-1 bg-primary rounded-full" />
              <View className="absolute bottom-0 right-0 w-1 h-8 bg-primary rounded-full" />
            </View>

            {/* Grid lines */}
            <View className="absolute top-1/3 left-0 right-0 h-px bg-white/20" />
            <View className="absolute top-2/3 left-0 right-0 h-px bg-white/20" />
            <View className="absolute top-0 bottom-0 left-1/3 w-px bg-white/20" />
            <View className="absolute top-0 bottom-0 left-2/3 w-px bg-white/20" />
          </View>

          {/* Tip at bottom */}
          <View className="absolute bottom-3 left-0 right-0 items-center">
            <View className="flex-row items-center bg-black/60 px-3 py-1.5 rounded-full">
              <View className="w-4 h-4 rounded-full border border-white items-center justify-center mr-2">
                <Text className="text-white text-xs font-poppins-bold">i</Text>
              </View>
              <Text className="text-white text-xs font-poppins">
                Hold steady. Ensure text is clear.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Controls */}
      <View className="flex-row items-center justify-around">
        {/* Gallery Button */}
        <TouchableOpacity className="items-center" onPress={onGallery}>
          <View className="w-14 h-14 rounded-full bg-white shadow-2xl items-center justify-center mb-1">
            <Images size={22} color="#6B7280" />
          </View>
          <Text className="text-xs text-neutral-500 font-poppins-medium">
            GALLERY
          </Text>
        </TouchableOpacity>

        {/* Capture Button */}
        <TouchableOpacity
          className="w-24 h-24 shadow-md shadow-primary/50 rounded-full bg-primary items-center justify-center border border-4 border-white"
          onPress={handleCapture}
        >
          <Camera size={40} color="#171717" />
        </TouchableOpacity>

        {/* Flash Button */}
        <TouchableOpacity className="items-center" onPress={handleToggleCancel}>
          <View
            className={`w-14 h-14 rounded-full shadow-2xl items-center justify-center mb-1 ${
              flashEnabled ? "bg-primary" : "bg-white"
            }`}
          >
            <X size={22} color={flashEnabled ? "#171717" : "#6B7280"} />
          </View>
          <Text className="text-xs text-neutral-500 font-poppins-medium">
            CANCEL
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
