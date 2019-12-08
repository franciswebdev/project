
export class Person {
  name: string;
  type: string;
  protected age: number;
  
  constructor(name: string, type: string, age: number, public username: string) {
    this.name = name;
    this.type = type;
    this.age = age;
  }

  printName() {
    console.log(`My name is ${this.name} of type ${this.type}`);
  }

  printThat(...a: string[]) {
    console.log(a);
  }
}

export abstract class PersonAbstract {
  
}

export class Dude extends Person {
  static SHIRT: string = "Supreme";

  constructor(type: string) {
    super("Morty", type, 20, "MortyUser");
  }

  get userType(): string {
    return `${this.username}:${this.type}`;
  }
}

