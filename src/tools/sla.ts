// Business-hours SLA maths. All times are wall-clock times in one time zone (the visitor's),
// handled as UTC-based Date values so daylight-saving changes don't shift the result.

export interface Schedule {
  start: number; // minutes after midnight the working day starts, e.g. 9 * 60
  end: number; // minutes after midnight it ends, e.g. 17 * 60
  days: number[]; // working weekdays, 0 = Sunday … 6 = Saturday
  holidays: string[]; // "YYYY-MM-DD" dates with no working hours
}

const DAY = 24 * 60 * 60 * 1000;

const dayStart = (t: number) => Math.floor(t / DAY) * DAY;
const isoDate = (t: number) => new Date(t).toISOString().slice(0, 10);

const isWorkingDay = (t: number, s: Schedule) =>
  s.days.includes(new Date(t).getUTCDay()) && !s.holidays.includes(isoDate(t));

// "2026-10-19T16:30" (as typed into a datetime-local field) → timestamp.
export const parseLocal = (value: string) => Date.parse(`${value}:00Z`);

// Timestamp → "2026-10-19T16:30" for a datetime-local field.
export const toLocalValue = (t: number) => new Date(t).toISOString().slice(0, 16);

const validSchedule = (s: Schedule) => s.end > s.start && s.days.length > 0;

// The moment a target of `minutes` business minutes, counted from `from`, runs out.
export const addBusinessMinutes = (from: number, minutes: number, s: Schedule): number | null => {
  if (!validSchedule(s) || !Number.isFinite(from)) return null;
  let t = from;
  let left = Math.max(0, minutes);
  // Ten years of days is far beyond any SLA; it only guards against endless loops.
  for (let i = 0; i < 3660; i++) {
    const day = dayStart(t);
    const open = day + s.start * 60000;
    const close = day + s.end * 60000;
    if (isWorkingDay(day, s) && t < close) {
      const begin = Math.max(t, open);
      const available = (close - begin) / 60000;
      if (left <= available) return begin + left * 60000;
      left -= available;
    }
    t = day + DAY;
  }
  return null;
};

// Business minutes between two moments.
export const businessMinutesBetween = (from: number, to: number, s: Schedule): number | null => {
  if (!validSchedule(s) || !Number.isFinite(from) || !Number.isFinite(to)) return null;
  if (to <= from) return 0;
  let total = 0;
  for (let day = dayStart(from); day < to && day - dayStart(from) < 3660 * DAY; day += DAY) {
    if (!isWorkingDay(day, s)) continue;
    const open = Math.max(day + s.start * 60000, from);
    const close = Math.min(day + s.end * 60000, to);
    if (close > open) total += (close - open) / 60000;
  }
  return total;
};
