import { add } from './calculator'

// Add function using strip to avoid floating point issues but losing precision (Not ideal for finance)
console.log(add(0.1, 0.2)) // 0.3