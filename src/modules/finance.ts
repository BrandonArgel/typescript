// Instead of:
const price = 10.5
const tax = 0.07
const total = price * (1 + tax) // 11.235000000000001
console.log("Normal numbers", {total})

// ✅ Gold Rule: Working with 'Pennies' (Whole Numbers)
// Do this (Everything in cents):
const priceCents = 1050 // $10.50
const taxPermille = 70 // 7% expressed in thousandths for more precision
const totalCents = (priceCents * (1000 + taxPermille)) / 1000
// Result: 1123 (then format to 11.23 when displaying to the user)
console.log("Integer math (in cents)", {totalCents})
console.log("Formatted total:", `$${(totalCents / 100).toFixed(2)}`)

// New standard Intl API for currency formatting
export const formatCurrency = (amount: number, currency: string = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

// Example usage:
const formatted = formatCurrency(11.235, 'USD');
console.log("Formatted currency:", formatted); // Output: $11.24
const formattedEUR = formatCurrency(11.235, 'EUR');
console.log("Formatted currency in EUR:", formattedEUR); // Output: €11.24
const formattedMXN = formatCurrency(11.235, 'MXN');
console.log("Formatted currency in MXN:", formattedMXN); // Output: MX$11.24 