
import { Demographic } from '../ns/People';

// Exercise 1
class Car {
  acceleration = 0;

  constructor(public name: string) { }

  honk() {
    console.log("Toooooooooot!");
  }

  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}
var car = new Car("BMW"); 
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

console.log(`---`, Demographic.People);


// Exercise 2
// var baseObject = {
//   width: 0,
//   length: 0
// };

// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function () {
//   return this.width * this.length;
// };
// console.log(rectangle.calcSize());

class BaseObject {
  constructor(
    public width: number = 0,
    public length: number = 0) {}
}

class Rectangle extends BaseObject {
  calcSize() {
    return this.width * this.length;
  }
}

let rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Exercise 3
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function () {
//     return this._firstName;
//   },
//   set: function (value) {
//     if (value.length > 3) {
//       this._firstName = value;
//     }
//     else {
//       this._firstName = "";
//     }
//   },
//   enumerable: true,
//   configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

class Person {
  private _firstName: string = "";

  get firstName(): string {
    return this._firstName;
  }

  set firstName(firstName: string) {
    this._firstName = firstName;
  }
}

let person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);