type PartOfTheCalendar = 'day' | 'month' | 'year';

export class MyDate {
  constructor(
    public year: number = 2021,
    private month: number = 1,
    private day: number = 1
  ) {

  }

  printFormat(): string {
    const { year } = this;
    const day = this.#addPadding(this.day);
    const month = this.#addPadding(this.month);
    return `${day}/${month}/${year}`;
  }

  add(amount: number, type: PartOfTheCalendar) {
    if (type === 'day') this.day += amount;
    if (type === 'month') this.month += amount;
    if (type === 'year') this.year += amount;
  }

  //  private addPadding (value: number) {
  #addPadding(value: number) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }
}

const myDate = new MyDate(2021, 1, 1);
console.log(myDate.printFormat())