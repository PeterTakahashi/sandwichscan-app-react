export function numberToUSD(num: number | null | undefined): string {
  if (num == null || isNaN(num)) return "$0.00";

  const usdNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(num);
  return usdNumber;
}
