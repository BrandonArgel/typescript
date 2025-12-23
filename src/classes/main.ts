export class Person {
  // We use "Parameter Properties" to declare and initialize in one step
  constructor(
    public name: string,
    protected age: number,
    private _savings: number = 0 // Convention: use underscore for private backing fields
  ) {}

  public getInfo(): string {
    return `My name is ${this.name}, I'm ${this.age} years old and I have $${this._savings} in savings.`
  }

  // Getters/Setters in camelCase
  protected get savings(): number {
    return this._savings
  }

  protected set savings(amount: number) {
    if (amount < 0) {
      throw new Error('Savings cannot be negative.')
    }
    this._savings = amount
  }
}

export class Developer extends Person {
  constructor(
    name: string,
    age: number,
    savings: number,
    public code: boolean,
    public mainLang: string
  ) {
    super(name, age, savings)
  }

  public getBasicInfo(): string {
    // Notice we access the protected getter 'this.savings'
    return `My name is ${this.name} and I'm ${this.age} years old and I have $${this.savings} in savings.`
  }

  public getDevInfo(): string {
    const status = this.code ? 'developer' : 'non-developer'
    return `${this.getInfo()} I am a ${status} and my main language is ${this.mainLang}.`
  }
}

// Example usage
const dev = new Developer('Brandon', 23, 10000, true, 'TypeScript')
console.log(dev.getDevInfo())
