export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) { }

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (this.instance === null) {
      this.instance = new MyService(name);
    }
    return this.instance;
  }
}
