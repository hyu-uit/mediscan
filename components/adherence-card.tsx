import { Colors } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Check, TrendingUp } from "lucide-react-native";
import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

export interface AdherenceCardProps {
  percentage: number;
  comparison: string; // e.g., "+4% vs last week"
  isPositive?: boolean;
}

export function AdherenceCard({
  percentage,
  comparison,
  isPositive = true,
}: AdherenceCardProps) {
  // SVG circle properties
  const size = 80;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <LinearGradient
      colors={[Colors.primaryBright, Colors.primary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: 16,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text
          style={{
            color: "rgba(23, 23, 23, 0.7)",
            fontSize: 11,
            fontFamily: "Poppins_700Bold",
            letterSpacing: 2,
            marginBottom: 4,
          }}
        >
          ADHERENCE
        </Text>
        <Text
          style={{
            color: "#171717",
            fontSize: 48,
            fontFamily: "Poppins_700Bold",
            lineHeight: 56,
            marginBottom: 12,
          }}
        >
          {percentage}
          <Text style={{ fontSize: 36 }}>%</Text>
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: 20,
            paddingHorizontal: 12,
            paddingVertical: 6,
          }}
        >
          <TrendingUp size={14} color={Colors.text.primary} />
          <Text
            style={{
              color: "#171717",
              fontSize: 12,
              fontFamily: "Poppins_500Medium",
              marginLeft: 6,
            }}
          >
            {comparison}
          </Text>
        </View>
      </View>

      {/* Circular Progress with Checkmark */}
      <View
        style={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Svg width={size} height={size}>
          {/* Background circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.4)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="white"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            rotation="-90"
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>
        <View
          style={{
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Check size={22} color={Colors.primaryBright} strokeWidth={3} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
