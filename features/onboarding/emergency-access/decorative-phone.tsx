import { Colors } from "@/constants/theme";
import { PhoneOff } from "lucide-react-native";
import { Text, View } from "react-native";

interface DecorativePhoneProps {
  size: number;
  style?: object;
  badge?: boolean;
}

export function DecorativePhone({ size, style, badge }: DecorativePhoneProps) {
  return (
    <View
      className="rounded-full bg-white items-center justify-center"
      style={[
        {
          width: size + 16,
          height: size + 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
        style,
      ]}
    >
      <PhoneOff size={size} color={Colors.primaryBright} />
      {badge && (
        <View
          className="absolute bg-red-500 rounded-full items-center justify-center"
          style={{
            width: size * 0.5,
            height: size * 0.5,
            top: 2,
            right: 2,
          }}
        >
          <Text
            className="text-white font-poppins-bold"
            style={{ fontSize: size * 0.3 }}
          >
            !
          </Text>
        </View>
      )}
    </View>
  );
}

