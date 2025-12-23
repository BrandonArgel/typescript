function isNumber(valor: unknown): valor is number {
  return typeof valor === 'number' && !Number.isNaN(valor)
}

console.log(isNumber(123)) // true
console.log(isNumber('123')) // false
console.log(isNumber(NaN)) // false
console.log(isNumber(undefined)) // false
