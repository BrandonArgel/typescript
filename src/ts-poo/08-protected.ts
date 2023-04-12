export abstract class Animal {
  constructor(protected name: string) { }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`);
  }

  greeting() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  bark(barks: number = 1): void {
    for (let i = 0; i < barks; i++) {
      console.log('Woof!');
    }
  }
}

// const fifi = new Animal('Fifi');
// fifi.greeting();
// fifi.move(10);

const rex = new Dog('Rex', "Brandon");
rex.greeting();
rex.move(10);
rex.bark(3);
console.log(rex.owner)