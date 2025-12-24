import { TimeValue } from "@/components/time-picker";
import { TIME_SLOT_OPTIONS } from "./constants";
import { IntakeTimeTypeValue, IntervalUnit, IntervalUnitType } from "./types";

/**
 * Parse time string like "08:00 AM" to TimeValue
 */
export function parseTime(timeStr: string): TimeValue {
  const match = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (match) {
    return {
      hour: match[1].padStart(2, "0"),
      minute: match[2],
      period: match[3].toUpperCase() as "AM" | "PM",
    };
  }
  return { hour: "08", minute: "00", period: "AM" };
}

/**
 * Format TimeValue to display string
 */
export function formatTime(time: TimeValue): string {
  return `${time.hour}:${time.minute} ${time.period}`;
}

/**
 * Get icon component for time slot type
 */
export function getTimeSlotIcon(type: IntakeTimeTypeValue, color: string) {
  const slot = TIME_SLOT_OPTIONS.find((s) => s.id === type);
  return slot?.icon(color);
}

/**
 * Get display name for time slot type
 */
export function getTimeSlotName(type: IntakeTimeTypeValue): string {
  const slot = TIME_SLOT_OPTIONS.find((s) => s.id === type);
  return slot?.name || type;
}

/**
 * Get interval display text (e.g., "Every 2 weeks")
 */
export function getIntervalDisplayText(
  intervalValue: string,
  intervalUnit: IntervalUnitType
): string {
  const num = parseInt(intervalValue);
  // Convert unit to display format
  const unitMap: Record<
    IntervalUnitType,
    { singular: string; plural: string }
  > = {
    [IntervalUnit.DAYS]: { singular: "day", plural: "days" },
    [IntervalUnit.WEEKS]: { singular: "week", plural: "weeks" },
    [IntervalUnit.MONTHS]: { singular: "month", plural: "months" },
  };
  const unit = unitMap[intervalUnit];
  return num === 1 ? `Every ${unit.singular}` : `Every ${num} ${unit.plural}`;
}
