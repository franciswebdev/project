
// function f() {
//   console.log("f(): evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("f(): called", target, '--', propertyKey, '--', descriptor);
//   }
// }

// function g() {
//   console.log("g(): evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log("g(): called", target, '--', propertyKey, '--', descriptor);
//   }
// }

// class C {
//   @f()
//   @g()
//   method() {
//     console.log('method')
//   }
// }

// let c = new C();
// c.method();

function classDecoratorA(constructor: Function) {
  console.log('classDecoratorA', constructor);
}

function classDecoratorB<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
      newProperty = "new property";
      _hello = "override";
  }
}

@classDecoratorA
// @classDecoratorB
export class Greeter {
  property = "property";
  private _hello: string;
  constructor(hello: string) {
      this._hello = hello;
  }
}

// console.log(new Greeter("world"));

// function classDecorator<T extends { new(...args: any[]): {} } >(constructor:T)