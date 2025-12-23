import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

export interface DailyProgressCardProps {
  dosesTaken: number;
  totalDoses: number;
}

export function DailyProgressCard({
  dosesTaken,
  totalDoses,
}: DailyProgressCardProps) {
  const percentage =
    totalDoses > 0 ? Math.round((dosesTaken / totalDoses) * 100) : 0;

  // SVG circle properties
  const size = 56;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View className="mx-6 mb-6 bg-neutral-800 dark:bg-neutral-800 rounded-2xl p-4 flex-row items-center justify-between">
      <View>
        <Text className="text-white text-lg font-poppins-bold mb-1">
          Daily Progress
        </Text>
        <View className="flex-row items-center">
          <View className="w-2 h-2 rounded-full bg-primary mr-2" />
          <Text className="text-sm text-primary font-poppins-semibold">
            {dosesTaken} of {totalDoses} doses taken
          </Text>
        </View>
      </View>

      {/* Circular Progress */}
      <View className="relative items-center justify-center">
        <Svg width={size} height={size}>
          {/* Background circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#374151"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#36EC37"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            rotation="-90"
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>
        <View className="absolute items-center justify-center">
          <Text className="text-white text-sm font-poppins-bold">
            {percentage}%
          </Text>
        </View>
      </View>
    </View>
  );
}
