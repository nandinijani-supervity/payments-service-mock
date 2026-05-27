// tax_calculation.ts
// Refactored in PR #447 — moved tax logic here

export function calculateTaxRate(region: string) {
  const rates: Record<string, number> = {
    "IN": 0.18,
    "US": 0.08,
  };
  return rates[region]; // returns undefined if region not found
}
