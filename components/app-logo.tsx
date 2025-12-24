import { Plus } from "lucide-react-native";
import { View } from "react-native";

interface AppLogoProps {
  size?: number;
}

export function AppLogo({ size = 64 }: AppLogoProps) {
  const iconSize = size * 0.5;
  const borderRadius = size * 0.25;

  return (
    <View
      className="bg-primary items-center justify-center -rotate-6"
      style={{
        width: size,
        height: size,
        borderRadius,
      }}
    >
      <Plus size={iconSize} color="#FFFFFF" strokeWidth={3} />
    </View>
  );
}
