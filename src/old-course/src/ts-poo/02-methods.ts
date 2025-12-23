export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'day' | 'month' | 'year'): void {
    if (type === 'day') {
      this.day += amount;
    } else if (type === 'month') {
      this.month += amount;
    } else {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(2021, 3, 13);
console.log(myDate.day);
myDate.day = 14;
console.log(myDate.day);