export function formatCurrency(
  value: number,
  locale = "de-DE",
  currency = "EUR"
) {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    value
  );
}
