export function formatTime(value: Date, locale = "de-DE") {
  return new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "numeric",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }).format(value);
}
