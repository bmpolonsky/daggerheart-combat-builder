export function cn(...values: Array<unknown>) {
  return values.filter((value): value is string => typeof value === "string" && value.length > 0).join(" ");
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function formatDateTime(value: string | null) {
  if (!value) return null;

  try {
    return new Date(value).toLocaleString("ru-RU", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return null;
  }
}
