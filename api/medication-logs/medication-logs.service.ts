import { HistoryStatus } from "@/components/history-item";
import { formatDate, formatDisplayDate, formatTime } from "@/utils/date";
import moment from "moment";
import {
  HistoryDto,
  HistoryGroupDto,
  HistoryLogItemDto,
  MedicationLogsStatsDto,
} from "./medication-logs.dto";
import {
  HistoryLogItemResponse,
  HistoryResponse,
  MedicationLogsStatsResponse,
} from "./medication-logs.response";

/**
 * Convert MedicationLogsStatsResponse to MedicationLogsStatsDto
 */
export function toMedicationLogsStatsDto(
  response: MedicationLogsStatsResponse
): MedicationLogsStatsDto {
  return {
    period: response.period,
    adherence: response.adherence,
    adherenceChange: response.adherenceChange,
    comparisonLabel: response.comparisonLabel,
    taken: response.taken,
    missed: response.missed,
    skipped: response.skipped,
    pending: response.pending,
    total: response.total,
    periodStart: response.periodStart,
    periodEnd: response.periodEnd,
  };
}

/**
 * Get date label (Today, Yesterday, or formatted date)
 */
function getDateLabel(date: string): string {
  const momentDate = moment(date);
  const today = moment().startOf("day");
  const yesterday = moment().subtract(1, "day").startOf("day");

  if (momentDate.isSame(today, "day")) {
    return "Today";
  } else if (momentDate.isSame(yesterday, "day")) {
    return "Yesterday";
  }
  return formatDisplayDate(date);
}

/**
 * Convert HistoryLogItemResponse to HistoryLogItemDto
 */
function toHistoryLogItemDto(
  response: HistoryLogItemResponse
): HistoryLogItemDto {
  return {
    id: response.id,
    name: response.medicationName,
    dosage: response.dosage,
    unit: response.unit,
    instructions: response.instructions,
    scheduledAt: formatDate(response.scheduledDate) + " " + response.time,
    takenAt: response.takenAt ? formatTime(response.takenAt) : null,
    status: response.status as HistoryStatus,
  };
}

/**
 * Convert HistoryResponse to HistoryDto
 * Groups logs by scheduledDate
 */
export function toHistoryDto(response: HistoryResponse): HistoryDto {
  // Group logs by scheduledDate
  const groupedByDate = response.logs.reduce((acc, log) => {
    const date = log.scheduledDate;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(log);
    return acc;
  }, {} as Record<string, HistoryLogItemResponse[]>);

  // Convert to array of groups, sorted by date descending
  const groups: HistoryGroupDto[] = Object.entries(groupedByDate)
    .sort(([dateA], [dateB]) => moment(dateB).diff(moment(dateA)))
    .map(([date, logs]) => ({
      label: getDateLabel(date),
      date,
      items: logs.map(toHistoryLogItemDto),
    }));

  return {
    period: response.period,
    periodStart: response.periodStart,
    periodEnd: response.periodEnd,
    groups,
  };
}
