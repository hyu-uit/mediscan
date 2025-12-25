import { apiClient } from "../api.client";
import { SaveFcmTokenRequest } from "./user-settings.request";

/**
 * Save FCM token for push notifications
 */
export async function saveFcmToken(fcmToken: string): Promise<void> {
  const request: SaveFcmTokenRequest = { fcmToken };
  await apiClient.post("/api/user-settings/fcm-token", request);
}

/**
 * Toggle push notifications setting
 */
export async function togglePushNotifications(): Promise<void> {
  await apiClient.post("/api/user-settings/toggle/push-notifications");
}

/**
 * Toggle automated calls setting
 */
export async function toggleAutomatedCalls(): Promise<void> {
  await apiClient.post("/api/user-settings/toggle/automated-calls");
}

/**
 * Toggle dark mode setting
 */
export async function toggleDarkMode(): Promise<void> {
  await apiClient.post("/api/user-settings/toggle/dark-mode");
}
