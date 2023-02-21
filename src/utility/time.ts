const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Time =
  | {
      year: number;
      month: MonthNumber;
    }
  | "present";

function getTimeString(time: Time) {
  if (time === "present") {
    return "Present";
  }

  return `${months[time.month - 1]} ${time.year}`;
}

export function getTimeframeString(time: { start: Time; end: Time } | Time) {
  return (isRange(time) ? [time.start, time.end] : [time])
    .map(getTimeString)
    .join(" - ");
}

function isRange(
  time: { start: Time; end: Time } | Time
): time is { start: Time; end: Time } {
  return !!(time as { start: Time; end: Time }).start;
}
