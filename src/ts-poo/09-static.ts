class MyMath {
  static readonly PI = 3.141592653589793;

  max(...numbers: number[]): number {
    return numbers.reduce((prev, current) => (current > prev ? current : prev));
  }
}

const math = new MyMath();
console.log(MyMath.PI);
console.log(math.max(11, 2, 3, 4, 5, 6, 7, 8, 9, 10));