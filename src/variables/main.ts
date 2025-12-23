const brandon: string = 'Brandon'
const age: number = 23
const isDev: boolean = true

console.log(`Hello ${brandon}! You are ${age} years old and you ${isDev ? 'are' : 'are not'} a developer.`)

let month: string = 'January'

console.log('The month is ' + month)
month = 'February'

// Tuple
type Person = [string, number, boolean]
const person: Person = ['Alice', 30, false]
console.log(`Person: ${person[0]}, Age: ${person[1]}, Is Developer: ${person[2]}`)

// Enum
enum WeekDays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

const date = new Date()
const today: WeekDays = date.getDay()
console.log(`Today is: ${today}, which is ${WeekDays[today]}`)
