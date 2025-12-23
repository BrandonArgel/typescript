import { Languages } from './types/languages.js'
import { Currencies } from './types/currencies.js'

export abstract class BankAccount {
  // 1. Parameter Properties: Shortcut to declare and initialize
  constructor(
    public readonly accountNumber: string, // Read-only: cannot be changed after creation
    public owner: string,
    public language: Languages = Languages.EN_US,
    private _balanceInCents: number = 0 // Balance stored in cents for precision
  ) {}

  /**
   * Getter to format the balance according to the account's language
   * @returns formatted string (e.g., $1,250.00 or 1.250,00 €)
   */
  public get formattedBalance(): string {
    const amount = this._balanceInCents / 100 // Convert back to units

    return new Intl.NumberFormat(this.language, {
      style: 'currency',
      currency: Currencies[this.language] || 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount)
  }

  // Getter for the "real" numeric value if needed for calculations
  public get balance(): number {
    return this._balanceInCents / 100
  }

  // Protected setter that receives the value in UNITS (dollars/euros)
  // and converts it to cents internally
  protected set balance(amount: number) {
    if (amount < 0) {
      throw new Error('Insufficient funds')
    }
    this._balanceInCents = Math.round(amount * 100)
  }

  // Abstract method to enforce deposit implementation in subclasses
  abstract deposit(amount: number): void

  public getSummary(): string {
    return `Account: ${this.accountNumber} | Owner: ${this.owner} | Balance: ${this.formattedBalance}`
  }
}
