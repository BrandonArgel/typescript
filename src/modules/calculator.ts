export const strip = (n: number): number => parseFloat(n.toPrecision(12))

export const add = (...numbers: number[]): number => strip(numbers.reduce((acc, curr) => acc + curr, 0))

export const subtract = (a: number, b: number): number => a - b

export const multiply = (...numbers: number[]): number => {
  if (numbers.includes(0)) return 0
  return numbers.reduce((acc, curr) => acc * curr, 1)
}

export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.')
  }
  return a / b
}

export const power = (base: number, exponent: number): number => base ** exponent

export const factorial = (n: number): bigint => {
  if (n < 0) throw new Error('Factorial is not defined for negative numbers.')
  let result = 1n
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i
  }
  return result
}

/**
 *
 * @param n
 * @returns the square root of n
 * @example
 * sqrt(9) // 3
 */
export const sqrt = (n: number): number => {
  if (n < 0) {
    throw new Error('Square root of negative numbers is not supported.')
  }
  return Math.sqrt(n)
}

/**
 *
 * @param part
 * @param total
 * @returns the percentage of part over total
 * @example
 * percentage(50, 200) // 25
 */
export const percentage = (part: number, total: number): number => {
  if (total === 0) throw new Error('Total cannot be zero.')
  return strip((part / total) * 100)
}

/**
 *
 * @param numbers
 * @returns the average of the provided numbers
 * @example
 * average(2, 4, 6) // 4
 */
export const average = (...numbers: number[]): number => {
  if (numbers.length === 0) {
    throw new Error('Cannot compute average of zero numbers.')
  }
  const sum = add(...numbers)
  return sum / numbers.length
}

/**
 *
 * @param numbers
 * @returns the maximum number among the provided numbers
 * @example
 * max(1, 5, 3) // 5
 */
export const max = (...numbers: number[]): number => {
  if (numbers.length === 0) {
    throw new Error('Cannot determine maximum of zero numbers.')
  }
  return Math.max(...numbers)
}

/**
 *
 * @param numbers
 * @returns the minimum number among the provided numbers
 * @example
 * min(1, 5, 3) // 1
 */
export const min = (...numbers: number[]): number => {
  if (numbers.length === 0) {
    throw new Error('Cannot determine minimum of zero numbers.')
  }
  return Math.min(...numbers)
}

/**
 *
 * @param n
 * @param decimals
 * @returns n rounded to the specified number of decimal places
 * @example
 * round(4.5678, 2) // 4.57
 */
export const round = (n: number, decimals: number = 0): number => {
  const factor = Math.pow(10, decimals)
  return Math.round(n * factor) / factor
}

/**
 *
 * @param n
 * @returns the smallest integer greater than or equal to n
 * @example
 * ceil(4.3) // 5
 */
export const ceil = (n: number): number => Math.ceil(n)

/**
 *
 * @param n
 * @returns the largest integer less than or equal to n
 * @example
 * floor(4.7) // 4
 */
export const floor = (n: number): number => Math.floor(n)

/**
 *
 * @param n
 * @returns the absolute value of n
 * @example
 * abs(-5) // 5
 */
export const abs = (n: number): number => Math.abs(n)

/**
 *
 * @param a
 * @param b
 * @returns the remainder of the division of a by b
 * @example
 * mod(10, 3) // 1
 */
export const mod = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.')
  }
  return a % b
}

/**
 *
 * @param n
 * @param base
 * @returns the logarithm of n to the specified base
 * @example
 * log(100, 10) // 2
 */
export const log = (n: number, base: number = Math.E): number => {
  if (n <= 0) {
    throw new Error('Logarithm is only defined for positive numbers.')
  }
  if (base <= 1) {
    throw new Error('Logarithm base must be greater than 1.')
  }
  return Math.log(n) / Math.log(base)
}

/**
 *
 * @param angleInDegrees
 * @returns angle in radians
 * @example
 * toRadians(30) // 0.5235987755982988
 */
export const sin = (angleInDegrees: number): number => {
  const angleInRadians = (angleInDegrees * Math.PI) / 180
  return Math.sin(angleInRadians)
}

/**
 *
 * @param angleInDegrees
 * @returns angle in radians
 * @example
 * toRadians(60) // 0.5235987755982988
 */
export const cos = (angleInDegrees: number): number => {
  const angleInRadians = (angleInDegrees * Math.PI) / 180
  return Math.cos(angleInRadians)
}

/**
 *
 * @param angleInDegrees
 * @returns angle in radians
 * @example
 * toRadians(45) // 0.7853981633974483
 */
export const tan = (angleInDegrees: number): number => {
  const angleInRadians = (angleInDegrees * Math.PI) / 180
  return Math.tan(angleInRadians)
}

/**
 *
 * @param angleInDegrees
 * @returns angle in radians
 * @example
 * toRadians(180) // Math.PI
 */
export const toRadians = (angleInDegrees: number): number => (angleInDegrees * Math.PI) / 180

/**
 *
 * @param angleInRadians
 * @returns angle in degrees
 * @example
 * toDegrees(Math.PI) // 180
 */
export const toDegrees = (angleInRadians: number): number => (angleInRadians * 180) / Math.PI

/**
 *
 * @param n
 * @param minValue
 * @param maxValue
 * @returns n clamped between minValue and maxValue
 * @example
 * clamp(10, 0, 5) // 5
 * clamp(-2, 0, 5) // 0
 * clamp(3, 0, 5) // 3
 */
export const clamp = (n: number, minValue: number, maxValue: number): number => {
  if (minValue > maxValue) {
    throw new Error('Minimum value cannot be greater than maximum value.')
  }
  return Math.min(Math.max(n, minValue), maxValue)
}

/**
 *
 * @param n
 * @returns true if the number is even
 * @example
 * isEven(4) // true
 * isEven(7) // false
 */
export const isEven = (n: number): boolean => n % 2 === 0

/**
 *
 * @param n
 * @returns true if the number is odd
 * @example
 * isOdd(3) // true
 * isOdd(8) // false
 */
export const isOdd = (n: number): boolean => n % 2 !== 0

/**
 *
 * @param a
 * @param b
 * @returns the greatest common divisor using the Euclidean algorithm
 * @example
 * gcd(48, 18) // 6
 */
export const gcd = (a: number, b: number): number => {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b) {
    a %= b
    ;[a, b] = [b, a]
  }
  return a
}

/**
 *
 * @param a
 * @param b
 * @returns the least common multiple
 * @example
 * lcm(4, 5) // 20
 */
export const lcm = (a: number, b: number): number => {
  if (a === 0 || b === 0) return 0 // El LCM con 0 suele definirse como 0
  // Dividir antes de multiplicar evita overflows innecesarios
  return Math.abs((a / gcd(a, b)) * b)
}

/**
 *
 * @param n
 * @returns the n-th Fibonacci number
 * @example
 * fibonacci(10) // 55
 */
export const fibonacci = (n: number): bigint => {
  if (n < 0) throw new Error('Fibonacci is not defined for negative numbers.')
  if (n === 0) return 0n
  let a = 0n,
    b = 1n
  for (let i = 2; i <= n; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}

/**
 *
 * @param n
 * @returns true if n is prime, false otherwise
 * @example
 * isPrime(7) // true
 * isPrime(10) // false
 */
export const isPrime = (n: number): boolean => {
  // 1. Base cases discarding numbers less than 2
  if (n <= 1 || !Number.isInteger(n)) return false
  if (n <= 3) return true // 2 and 3 are prime

  // 2. Quick discard of multiples of 2 and 3
  if (n % 2 === 0 || n % 3 === 0) return false

  // 3. Optimization 6k ± 1
  // All primes greater than 3 can be written as (6k ± 1)
  // We iterate from 5 and skip by 6 (i += 6)
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false
  }

  return true
}
