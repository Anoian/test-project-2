export function formatDate(value: Date, locale = "de-DE") {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }).format(value);
}
