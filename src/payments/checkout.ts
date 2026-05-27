// checkout.ts
// Last modified: PR #447 — tax_calculation refactor

export function processCheckout(cart: Cart) {
  const tax = calculateTax(cart.items);  // line 284
  const total = cart.subtotal + tax;
  return { total, status: "pending" };
}

function calculateTax(items: CartItem[]) {
  // BUG: returns null when items array is empty
  return items.reduce((acc, item) => acc + item.taxRate, null);
}
