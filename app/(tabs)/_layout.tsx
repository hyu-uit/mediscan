import { Colors } from "@/constants/theme";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { Plus } from "lucide-react-native";
import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function FloatingAddButton() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const insets = useSafeAreaInsets();

  const handlePress = () => {
    router.push("/scan");
  };

  // Position above the tab bar
  const bottomPosition = 49 + insets.bottom + 16;

  return (
    <View style={[styles.fabContainer, { bottom: bottomPosition }]}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        style={styles.fabTouchable}
      >
        <BlurView
          intensity={60}
          tint={isDark ? "dark" : "light"}
          style={styles.fabBlur}
        >
          <View className="bg-white shadow-lgdark:bg-[#11181C] items-center justify-center rounded-full p-2">
            <Plus size={26} color={Colors.primaryBright} strokeWidth={2.5} />
          </View>
        </BlurView>
      </TouchableOpacity>
    </View>
  );
}

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <NativeTabs
        tintColor={Colors.primaryBright}
        labelStyle={{
          color: Colors.ui.tabInactive,
          selected: { color: Colors.primaryBright },
        }}
      >
        <NativeTabs.Trigger name="index">
          <Icon sf="house.fill" />
          <Label>Home</Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="schedule">
          <Icon sf="calendar" />
          <Label>Schedule</Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="history">
          <Icon sf="clock.arrow.circlepath" />
          <Label>History</Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="profile">
          <Icon sf="person.fill" />
          <Label>Profile</Label>
        </NativeTabs.Trigger>
      </NativeTabs>

      <FloatingAddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fabContainer: {
    position: "absolute",
    right: 20,
    zIndex: 100,
  },
  fabTouchable: {
    borderRadius: 26,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },
  fabBlur: {
    borderRadius: 26,
    overflow: "hidden",
  },
  fabInner: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
