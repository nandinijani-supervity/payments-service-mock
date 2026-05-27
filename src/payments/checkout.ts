// checkout.ts
// Last modified: PR #447 — tax_calculation refactor

export function processCheckout(cart: Cart) {
  // BUG: cart.subtotal has floating point rounding errors
  // Example: $19.99 + $10.01 = $30.00999999999 instead of $30.00
  const tax = calculateTax(cart.items);  // line 284
  const total = cart.subtotal + tax;
  return { total, status: "pending" };
}

function calculateTax(items: CartItem[]) {
  // BUG: returns null when items array is empty
  return items.reduce((acc, item) => acc + item.taxRate, null);
}
