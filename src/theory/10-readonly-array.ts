const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// numbers.push(6);
// numbers.pop();
// numbers.unshift(0);
numbers.filter((n) => n % 2 === 0);
numbers.reduce((a, b) => a + b, 0);
numbers.map((n) => n * 2);