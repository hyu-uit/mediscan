import {
  NotificationItem,
  NotificationStatus,
} from "@/components/notification-item";
import {
  NotificationFilter,
  NotificationTabs,
} from "@/components/notification-tabs";
import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { Bell, ChevronLeft } from "lucide-react-native";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock notification data
interface Notification {
  id: string;
  medicineName: string;
  dosage: string;
  instructions?: string;
  status: NotificationStatus;
  time: string;
}

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    medicineName: "Lisinopril",
    dosage: "10mg",
    instructions: "Take with water",
    status: "pending",
    time: "2:00 PM",
  },
  {
    id: "2",
    medicineName: "Metformin",
    dosage: "500mg",
    instructions: "After breakfast",
    status: "pending",
    time: "4:00 PM",
  },
  {
    id: "3",
    medicineName: "Aspirin",
    dosage: "81mg",
    status: "missed",
    time: "12:00 PM",
  },
  {
    id: "4",
    medicineName: "Vitamin D",
    dosage: "1000 IU",
    instructions: "With food",
    status: "taken",
    time: "12:00 PM",
  },
  {
    id: "5",
    medicineName: "Omeprazole",
    dosage: "20mg",
    instructions: "Before meal",
    status: "missed",
    time: "12:00 PM",
  },
  {
    id: "6",
    medicineName: "Atorvastatin",
    dosage: "40mg",
    instructions: "At bedtime",
    status: "taken",
    time: "12:00 PM",
  },
];

export function NotificationScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const [selectedFilter, setSelectedFilter] =
    useState<NotificationFilter>("all");

  const handleBack = () => {
    router.back();
  };

  // Filter notifications based on selected tab
  const filteredNotifications = MOCK_NOTIFICATIONS.filter((notification) => {
    if (selectedFilter === "all") return true;
    return notification.status === selectedFilter;
  });

  // Empty state messages
  const getEmptyMessage = () => {
    switch (selectedFilter) {
      case "taken":
        return "No taken medications yet";
      case "missed":
        return "No missed medications. Great job!";
      default:
        return "No notifications";
    }
  };

  return (
    <SafeAreaView
      className="flex-1 bg-background dark:bg-neutral-900"
      edges={["top"]}
    >
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <TouchableOpacity
          onPress={handleBack}
          className="w-10 h-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800"
          activeOpacity={0.7}
        >
          <ChevronLeft
            size={20}
            color={isDark ? Colors.icon.light : Colors.icon.dark}
          />
        </TouchableOpacity>
        <Text className="text-lg text-neutral-900 dark:text-neutral-100 font-poppins-bold">
          Notifications
        </Text>
        <View className="w-10" />
      </View>

      {/* Filter Tabs */}
      <View className="px-6 mb-4">
        <NotificationTabs
          selected={selectedFilter}
          onSelect={setSelectedFilter}
        />
      </View>

      {/* Notification List */}
      <ScrollView
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification, index) => (
            <NotificationItem
              key={notification.id}
              id={notification.id}
              medicineName={notification.medicineName}
              dosage={notification.dosage}
              instructions={notification.instructions}
              status={notification.status}
              time={notification.time}
              isLast={index === filteredNotifications.length - 1}
              opacity={
                notification.status !== "pending" && selectedFilter === "all"
                  ? 0.6
                  : 1
              }
            />
          ))
        ) : (
          <View className="flex-1 items-center justify-center py-20">
            <View
              className="w-16 h-16 rounded-full items-center justify-center mb-4"
              style={{
                backgroundColor: isDark
                  ? "rgba(255, 209, 220, 0.2)"
                  : Colors.primaryLight,
              }}
            >
              <Bell size={28} color={Colors.primaryBright} />
            </View>
            <Text className="text-base text-neutral-500 dark:text-neutral-400 font-poppins-medium text-center">
              {getEmptyMessage()}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
