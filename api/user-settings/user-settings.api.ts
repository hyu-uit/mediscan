import { apiClient } from "../api.client";
import { SaveFcmTokenRequest } from "./user-settings.request";

/**
 * Save FCM token for push notifications
 */
export async function saveFcmToken(fcmToken: string): Promise<void> {
  const request: SaveFcmTokenRequest = { fcmToken };
  await apiClient.post("/api/user-settings/fcm-token", request);
}
