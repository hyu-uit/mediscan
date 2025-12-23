import { Check, X } from "lucide-react-native";
import { Text, View } from "react-native";

export interface StatsRowProps {
  takenCount: number;
  missedCount: number;
}

export function StatsRow({ takenCount, missedCount }: StatsRowProps) {
  return (
    <View style={{ flexDirection: "row", gap: 12 }}>
      {/* Taken Card */}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderRadius: 16,
          padding: 16,
          borderWidth: 1,
          borderColor: "#E5E7EB",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: "#DCFCE7",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 8,
            }}
          >
            <Check size={14} color="#22C55E" strokeWidth={3} />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: "#6B7280",
              fontFamily: "Poppins_500Medium",
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            Taken
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text
            style={{
              fontSize: 28,
              color: "#171717",
              fontFamily: "Poppins_700Bold",
            }}
          >
            {takenCount}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#6B7280",
              fontFamily: "Poppins_400Regular",
              marginLeft: 6,
            }}
          >
            {takenCount === 1 ? "Dose" : "Doses"}
          </Text>
        </View>
      </View>

      {/* Missed Card */}
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderRadius: 16,
          padding: 16,
          borderWidth: 1,
          borderColor: "#E5E7EB",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: "#FEE2E2",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 8,
            }}
          >
            <X size={14} color="#EF4444" strokeWidth={3} />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: "#6B7280",
              fontFamily: "Poppins_500Medium",
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            Missed
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text
            style={{
              fontSize: 28,
              color: "#171717",
              fontFamily: "Poppins_700Bold",
            }}
          >
            {missedCount}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#6B7280",
              fontFamily: "Poppins_400Regular",
              marginLeft: 6,
            }}
          >
            {missedCount === 1 ? "Dose" : "Doses"}
          </Text>
        </View>
      </View>
    </View>
  );
}
