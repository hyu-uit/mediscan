import { apiClient } from "../api.client";
import { ApiResponse } from "../api.types";
import { ScanResultDto } from "./scan.dto";
import { ScanResponse } from "./scan.response";
import { toScanResultDto } from "./scan.service";

/**
 * Get MIME type from file extension or URI
 */
function getMimeType(uri: string): string {
  const extension = uri.split(".").pop()?.toLowerCase();

  switch (extension) {
    case "png":
      return "image/png";
    case "gif":
      return "image/gif";
    case "heic":
    case "heif":
      return "image/heic";
    case "webp":
      return "image/webp";
    case "jpg":
    case "jpeg":
    default:
      return "image/jpeg";
  }
}

/**
 * Scan a prescription image and extract medications
 * @param imageUri - Local URI of the image to scan
 * @returns Extracted medications and scan metadata
 */
export async function scanPrescription(
  imageUri: string
): Promise<ScanResultDto> {
  // Create form data with the image file
  const formData = new FormData();

  // Extract filename from URI, ensure it has an extension
  let filename = imageUri.split("/").pop() || "prescription.jpg";

  // If no extension, add .jpg
  if (!filename.includes(".")) {
    filename = `${filename}.jpg`;
  }

  // Get MIME type
  const mimeType = getMimeType(filename);

  // Append file to form data (React Native specific format)
  formData.append("file", {
    uri: imageUri,
    name: filename,
    type: mimeType,
  } as unknown as Blob);

  const response = await apiClient.post<ApiResponse<ScanResponse>>(
    "/api/scan",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return toScanResultDto(response.data.data);
}
