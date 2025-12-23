import { BankAccount } from './BankAccount.js'
import { Languages } from './types/languages.js'

export class SavingsAccount extends BankAccount {
  constructor(
    accountNumber: string,
    owner: string,
    balance: number, // Receives balance in UNITS (dollars/euros)
    language: Languages = Languages.EN_US,
    public interestRate: number = 0.02 // 2% of interest
  ) {
    // Call to the BankAccount constructor
    super(accountNumber, owner, language)

    // Initialize the balance using the protected setter from the base class
    // This automatically converts 100.50 to 10050 cents internally
    this.balance = balance
  }

  /**
   * Implementation of the abstract deposit method
   */
  public deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Deposit amount must be positive')
    }

    const interest = amount * this.interestRate
    const totalToDeposit = amount + interest

    // Update the balance through the setter from the parent class.
    // The setter handles the logic of converting to cents:
    // this._balanceInCents = Math.round(totalToDeposit * 100);
    this.balance += totalToDeposit

    console.log(`Successfully deposited ${amount} plus ${interest.toFixed(2)} in interest.`)
  }

  /**
   * Method to withdraw money with specific business logic
   */
  public withdraw(amount: number): void {
    // Check funds using the 'balance' getter which already returns the real value
    if (amount > this.balance) {
      console.error(`Withdrawal denied: Insufficient funds in ${this.accountNumber}.`)
      return
    }

    if (amount <= 0) {
      throw new Error('Withdrawal amount must be positive')
    }

    // The setter will subtract the value and update the internal cents
    this.balance -= amount
    console.log(`Withdrew: ${amount}. New balance: ${this.formattedBalance}`)
  }

  /**
   * Override getSummary to include interest rate information
   */
  public override getSummary(): string {
    return `${super.getSummary()} | Interest Rate: ${(this.interestRate * 100).toFixed(2)}%`
  }
}
