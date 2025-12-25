import moment from "moment";

/**
 * Format a date string or Date object
 * @param date - Date string, Date object, or moment object
 * @param format - Output format (default: "YYYY-MM-DD")
 * @returns Formatted date string
 */
export function formatDate(
  date: string | Date | moment.Moment | null,
  format: string = "DD-MM-YYYY"
): string {
  return moment(date).format(format);
}

/**
 * Format a date to display format (e.g., "Dec 25, 2025")
 */
export function formatDisplayDate(date: string | Date | moment.Moment): string {
  return moment(date).format("MMM D, YYYY");
}

/**
 * Format a date to short display format (e.g., "Dec 25")
 */
export function formatShortDate(date: string | Date | moment.Moment): string {
  return moment(date).format("MMM D");
}

/**
 * Format time (e.g., "08:00 AM")
 */
export function formatTime(date: string | Date | moment.Moment): string {
  return moment(date).format("hh:mm A");
}

/**
 * Get today's date in YYYY-MM-DD format
 */
export function getTodayDate(): string {
  return moment().format("YYYY-MM-DD");
}

/**
 * Check if a date is today
 */
export function isToday(date: string | Date | moment.Moment): boolean {
  return moment(date).isSame(moment(), "day");
}

/**
 * Check if a date is in the past
 */
export function isPast(date: string | Date | moment.Moment): boolean {
  return moment(date).isBefore(moment(), "day");
}

/**
 * Get relative time (e.g., "2 hours ago", "in 3 days")
 */
export function getRelativeTime(date: string | Date | moment.Moment): string {
  return moment(date).fromNow();
}
