import { useEffect, useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { runOnJS } from "react-native-reanimated";
import ColorPicker, {
  HueSlider,
  Panel1,
  Swatches,
} from "reanimated-color-picker";

interface ColorPickerModalProps {
  isOpen: boolean;
  initialColor: string;
  title?: string;
  onClose: () => void;
  onSave: (color: string) => void;
}

// Preset colors for quick selection
const PRESET_COLORS = [
  "#EA580C", // Orange
  "#D97706", // Amber
  "#16A34A", // Green
  "#0EA5E9", // Sky
  "#6366F1", // Indigo
  "#A855F7", // Purple
  "#EC4899", // Pink
  "#EF4444", // Red
  "#3B5F8A", // Blue Gray
  "#171717", // Black
];

export function ColorPickerModal({
  isOpen,
  initialColor,
  title = "Choose Color",
  onClose,
  onSave,
}: ColorPickerModalProps) {
  const [selectedColor, setSelectedColor] = useState(initialColor || "#EA580C");

  // Reset selected color when modal opens with new initial color
  useEffect(() => {
    if (isOpen && initialColor) {
      setSelectedColor(initialColor);
    }
  }, [isOpen, initialColor]);

  // This is called on UI thread, so we need to use runOnJS to update state
  const handleColorComplete = (result: { hex: string }) => {
    "worklet";
    if (result?.hex) {
      runOnJS(setSelectedColor)(result.hex);
    }
  };

  const handleSave = () => {
    onSave(selectedColor);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="slide"
      onRequestClose={handleCancel}
    >
      <Pressable
        className="flex-1 bg-black/50 justify-end"
        onPress={handleCancel}
      >
        <Pressable
          className="bg-white dark:bg-neutral-900 rounded-t-3xl p-6"
          onPress={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <View className="flex-row items-center justify-between mb-6">
            <TouchableOpacity onPress={handleCancel}>
              <Text className="text-base text-neutral-500 font-poppins-medium">
                Cancel
              </Text>
            </TouchableOpacity>
            <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold">
              {title}
            </Text>
            <TouchableOpacity onPress={handleSave}>
              <Text className="text-base text-primary-bright font-poppins-semibold">
                Save
              </Text>
            </TouchableOpacity>
          </View>

          {/* Color Preview */}
          <View
            className="h-12 rounded-xl mb-4"
            style={{ backgroundColor: selectedColor }}
          />

          {/* Color Picker */}
          {isOpen && (
            <ColorPicker
              value={selectedColor}
              onComplete={handleColorComplete}
              style={{ width: "100%", gap: 16 }}
            >
              {/* Color Panel */}
              <Panel1
                style={{
                  height: 180,
                  borderRadius: 12,
                }}
              />

              {/* Hue Slider */}
              <HueSlider
                style={{
                  height: 32,
                  borderRadius: 16,
                }}
              />

              {/* Preset Swatches */}
              <Swatches
                colors={PRESET_COLORS}
                style={{
                  justifyContent: "center",
                  gap: 8,
                }}
                swatchStyle={{
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  marginHorizontal: 4,
                }}
              />
            </ColorPicker>
          )}

          {/* Bottom Safe Area */}
          <View className="h-6" />
        </Pressable>
      </Pressable>
    </Modal>
  );
}
