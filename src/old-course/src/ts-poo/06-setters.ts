type PartOfTheCalendar = 'day' | 'month' | 'year';

export class MyDate {
  constructor(
    public year: number = 2021,
    private _month: number = 1,
    private _day: number = 1
  ) {

  }

  printFormat(): string {
    const { year } = this;
    const day = this.#addPadding(this._day);
    const month = this.#addPadding(this._month);
    return `${day}/${month}/${year}`;
  }

  add(amount: number, type: PartOfTheCalendar) {
    if (type === 'day') this._day += amount;
    if (type === 'month') this._month += amount;
    if (type === 'year') this.year += amount;
  }

  //  private addPadding (value: number) {
  #addPadding(value: number) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }

  get month(): number {
    return this._month;
  }

  set month(month: number) {
    if (month < 1 || month > 12) throw new Error('Invalid month');
    this._month = month;
  }
}

const myDate = new MyDate(2021, 1, 1);
console.log(myDate.printFormat())
myDate.month = 4;
console.log("run", myDate.month)
myDate.month = 123;
console.log("not run", myDate.month)
