const identity = <T>(arg: T): T => {
  return arg
}

const output1 = identity<string>('myString')
console.log(output1) // Output: myString

const output2 = identity<number>(42)
console.log(output2) // Output: 42

const output3 = identity<boolean>(true)
console.log(output3) // Output: true

// Generic function with multiple type parameters
const pair = <T, U>(first: T, second: U): [T, U] => {
  return [first, second]
}

const result = pair<string, number>('age', 30)
console.log(result) // Output: ['age', 30]

// Generic interface
interface KeyValue<K, V> {
  key: K
  value: V
}

const kv1: KeyValue<string, number> = { key: 'id', value: 1 }
console.log(kv1) // Output: { key: 'id', value: 1 }

const kv2: KeyValue<number, string> = { key: 2, value: 'name' }
console.log(kv2) // Output: { key: 2, value: 'name' }

// Generic class
class GenericContainer<T> {
  private items: T[] = []

  addItem(item: T): void {
    this.items.push(item)
  }

  getItems(): T[] {
    return this.items
  }
}

const container = new GenericContainer<number>()
container.addItem(10)
container.addItem(20)
console.log(container.getItems()) // Output: [10, 20]

// Real world examples

// 1. All types with length property
const getLength = <T extends { length: number }>(arg: T): number => arg.length

console.log(getLength('Hello')) // Output: 5
console.log(getLength([1, 2, 3, 4])) // Output: 4
// console.log(getLength(document.querySelectorAll("div")))

// 2. Get property value of an object
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key]
}

const newPerson = { name: 'Alice', age: 25, isDev: true }

const personName = getProperty(newPerson, 'name')
console.log(personName) // Output: Alice
