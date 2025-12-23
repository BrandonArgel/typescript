interface TPerson {
  name: string
  age: number
}

function PersonDecorator<T extends { new (...args: any[]): TPerson }>(constructor: T) {
  return class extends constructor {
    celebrateBirthday() {
      this.age += 1
      console.log(`Happy birthday, ${this.name}! You are now ${this.age} years old.`)
    }

    greet() {
      console.log(`Hi! I'm ${this.name}, and I'm ${this.age} years old.`)
    }
  }
}

@PersonDecorator
class Person2 {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  celebrateBirthday() {
    this.age += 1
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
}
