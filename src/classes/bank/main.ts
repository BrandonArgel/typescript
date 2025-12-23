import { SavingsAccount } from './SavingsAccount.js'
import { Languages } from './types/languages.js'

const mySavings = new SavingsAccount('SAV-001', 'Brandon', 1000, Languages.ES_MX)

console.log(mySavings.getSummary())
// Output: Account: SAV-001 | Owner: Brandon | Balance: $1000

mySavings.withdraw(200)
// Output: Withdrew: 200. New balance: $800

mySavings.deposit(500)
// Output: Deposited $500 + $10 interest.

// mySavings.deposit(0)
// Throws Error: Deposit amount must be positive

console.log(mySavings.getSummary())
// Output: Account: SAV-001 | Owner: Brandon | Balance: $1,310

mySavings.withdraw(2000)
// Output: Withdrawal failed: Overdraft not allowed in Savings.
