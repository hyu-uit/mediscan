import { ActionChip } from "@/components/action-chip";
import { Button } from "@/components/button";
import { ProfileHeader } from "@/components/profile-header";
import { SettingsRow } from "@/components/settings-row";
import { SettingsSection } from "@/components/settings-section";
import { useAuth, useGetMe, useLogout } from "@/hooks/useAuth";
import {
  useToggleAutomatedCalls,
  useToggleDarkMode,
  useTogglePushNotifications,
} from "@/hooks/useUserSettings";
import { router } from "expo-router";
import {
  Bell,
  Clock,
  FileText,
  LogOut,
  Moon,
  Phone,
  Shield,
  Users,
} from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ProfileScreen() {
  const { logout } = useLogout();
  const { user } = useAuth();

  // Fetch user data
  useGetMe();

  // Toggle mutations
  const { mutate: togglePush } = useTogglePushNotifications();
  const { mutate: toggleCalls } = useToggleAutomatedCalls();
  const { mutate: toggleDark } = useToggleDarkMode();

  return (
    <SafeAreaView
      className="flex-1 bg-background dark:bg-neutral-900"
      edges={["top"]}
    >
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 pt-2 mb-6">
          <Text className="text-2xl text-neutral-900 dark:text-neutral-100 font-poppins-bold">
            Profile & Settings
          </Text>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 items-center justify-center">
            <Bell size={20} color="#171717" />
          </TouchableOpacity>
        </View>

        {/* Profile Header */}
        <View className="px-6">
          <ProfileHeader
            name={user?.name ?? "User"}
            email={user?.email ?? ""}
            avatarUrl="https://i.pravatar.cc/150?img=47"
          />
        </View>

        {/* Action Chips */}
        <View className="flex-row justify-center gap-3 mb-8">
          <ActionChip label="Edit Profile" onPress={() => {}} />
          <ActionChip label="Insurance" onPress={() => {}} />
        </View>

        {/* Settings Sections */}
        <View className="px-6">
          {/* Alerts & Automation */}
          <SettingsSection title="Alerts & Automation">
            <SettingsRow
              icon={<Bell size={20} color="#6B7280" />}
              title="Push Notifications"
              subtitle={
                user?.settings?.pushNotifications
                  ? "Reminders enabled"
                  : "Reminders disabled"
              }
              action="toggle"
              toggleValue={user?.settings?.pushNotifications ?? false}
              onToggleChange={() => togglePush()}
            />
            <SettingsRow
              icon={<Phone size={20} color="#6B7280" />}
              title="Automated Calls"
              subtitle={
                user?.settings?.automatedCalls
                  ? "Escalation enabled"
                  : "Escalation disabled"
              }
              action="toggle"
              toggleValue={user?.settings?.automatedCalls ?? false}
              onToggleChange={() => toggleCalls()}
            />
            <SettingsRow
              icon={<Users size={20} color="#6B7280" />}
              title="Caregiver Alerts"
              subtitle="1 person connected"
              action="chevron"
              onPress={() => {}}
              isLast
            />
          </SettingsSection>

          {/* Preferences */}
          <SettingsSection title="Preferences">
            <SettingsRow
              icon={<Clock size={20} color="#6B7280" />}
              title="Default Intake Times"
              subtitle="Morning & Evening"
              action="chevron"
              onPress={() => router.push("/default-schedule" as never)}
            />
            <SettingsRow
              icon={<Moon size={20} color="#6B7280" />}
              title="Dark Mode"
              action="toggle"
              toggleValue={user?.settings?.darkMode ?? false}
              onToggleChange={() => toggleDark()}
              isLast
            />
          </SettingsSection>

          {/* Legal & Support */}
          <SettingsSection title="Legal & Support">
            <SettingsRow
              icon={<Shield size={20} color="#6B7280" />}
              title="Privacy Policy"
              action="external"
              onPress={() => {}}
            />
            <SettingsRow
              icon={<FileText size={20} color="#6B7280" />}
              title="Terms of Service"
              action="external"
              onPress={() => {}}
              isLast
            />
          </SettingsSection>

          {/* Sign Out Button */}
          <View className="mt-2">
            <Button
              variant="outline"
              size="lg"
              fullWidth
              icon={<LogOut size={18} color="#EF4444" />}
              onPress={logout}
            >
              <Text className="text-red-500 font-poppins-semibold">
                Sign Out
              </Text>
            </Button>
          </View>

          {/* App Version */}
          <Text className="text-center text-xs text-neutral-400 font-poppins mt-6">
            App Version 2.4.1 (Build 890)
          </Text>
        </View>
        {/* Bottom Padding */}
        <View className="h-8" />
      </ScrollView>
    </SafeAreaView>
  );
}
