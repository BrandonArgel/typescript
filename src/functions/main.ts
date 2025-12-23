// Overload signatures
function combine(a: string, b: string): string
function combine(a: number, b: number): number
function combine(a: boolean, b: boolean): boolean

// Unique implementation
function combine(a: string | number | boolean, b: string | number | boolean): string | number | boolean {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b // Concatenation
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return a + b // Numeric sum
  }

  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return a && b // Logical AND
  }

  throw new Error('Incompatible types')
}

console.log(combine('Hola', ' Mundo')) // "Hola Mundo"
console.log(combine(10, 20)) // 30
console.log(combine(true, false)) // false
