import { Colors } from "@/constants/theme";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { StyleSheet, View } from "react-native";

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

        <NativeTabs.Trigger name="scan" role="search">
          <Icon sf="camera.viewfinder" />
          <Label>Scan</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
