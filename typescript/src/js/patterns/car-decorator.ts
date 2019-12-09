'use strict';

abstract class PowerSource {
  public type?: string;
}

abstract class Vehicle {
  constructor() {}
  abstract get info(): string;
}

// ***************************************************************

export class Bicycle extends Vehicle {

  private _powerSource: PowerSource;

  constructor() {
    super();
    this._powerSource = { type: 'legs'};
  }

  get info(): string {
    return [ Bicycle.name, 'is powered by', this._powerSource.type ].join(' ');
  }
}

let myBicycle = new Bicycle();
console.log(myBicycle.info)

// ***************************************************************

export const enum FuelType {
  PETROL = 'petrol',
  DIESEL = 'diesel',
}

export class Engine extends PowerSource {

  static STANDARD = new Engine();
  static DIESEL4WD = new Engine(FuelType.DIESEL, "1");

  constructor(
    public fuel: FuelType = FuelType.PETROL,
    public displacement?: string,
    type: string = 'engine') {

      super();
      this.type = type;
  }

  get info(): string {
    return [ this.displacement, this.fuel, this.type ]
      .filter(value => !!value).join(' ');
  }
}

// ***************************************************************

enum CoatColour {
  RED = "Red",
  GREY = "Grey",
  WHITE = "White",
  CARROT = "Carrot",
  DEFAULT = ""
}

export class Car extends Vehicle {

  protected _engine: Engine;
  protected _name: string;

  constructor(engine: Engine = new Engine(),
    name: string = Car.name) {

    super();
    this._engine = engine;
    this._name = name;
  }

  get info(): string {
    return [ this._name, 'is powered by', this._engine.info ]
      .filter(p => !!p).join(' ');
  }
}

let myCar = new Car(new Engine(FuelType.DIESEL), "Oldsmobile");
console.log(myCar.info)

// ***************************************************************

export class Mini extends Car {

  constructor(
    public model: string = "Cooper",
    engine: Engine = new Engine()) {

    super(engine);

    this._name = Mini.name + ' ' + model;
  }
}

let myMini = new Mini(
  "Countryman", 
  new Engine(FuelType.PETROL, '1.4L'));
console.log(myMini.info);

// ***************************************************************

export class SUV extends Car {

  constructor(
    public model: string = SUV.name,
    public engine?: Engine,
    public drive?: "2WD"|"4WD") {

    super(engine);
    this._name = model;
  }

  get info() {
    return [
      super.info,
      this.drive
    ].filter(p => !!p).join(', ');
  }
}

class Mini2 extends Car {
  hasRacingStripes: boolean = false;
  hasDLR: boolean = true;
  isConvertible: boolean = false;
}

class MiniSport extends Mini {

  constructor(wheelSize?: string) { 
    super("Mini Cooper Sport", new Engine(FuelType.PETROL, "2.0L turbo"));
  }
}


let mySUV = new SUV();
console.log(mySUV.info);

mySUV = new SUV(
  "Hyundai CRV",
  new Engine(FuelType.DIESEL, "1.5L turbo"),
  "4WD");
console.log(mySUV.info);

// ***************************************************************
// Decorator classes
// ***************************************************************

export class CarDecorator extends Car {
  public car: Car;
  // some other attributes
  constructor(car: Car) {
    super();
    this.car = car;
  }
}

export class Coat extends CarDecorator {
  constructor(car: Car,
    private colour?: string,
    private finish?: string) {
    super(car);
  }

  get info() {
    return [ this.finish, this.colour, this.car.info ]
    .filter(p => !!p).join(' ');
  }
}

export class Drive extends CarDecorator {
  constructor(
    car: Car,
    private drive: "2WD"|"4WD" = "2WD") {
    super(car);
  }

  get info() {
    return [ this.car.info, this.drive ]
      .filter(p => !!p).join(', ');
  }
}

export class Wheels extends CarDecorator {
  constructor(
    car: Car,
    private wheelSize: string) {
    super(car);
  }

  get info() {
    return [ this.car.info, this.wheelSize ]
      .filter(p => !!p).join(', ');
  }
}

let thisCar = new Car(
  new Engine(FuelType.DIESEL),
  "Sköda Fabia");thisCar
console.log(thisCar.info);

thisCar = new Coat(thisCar, "Pink")
console.log(thisCar.info);

thisCar = new Drive(thisCar, "4WD");
console.log(thisCar.info);

thisCar = new Wheels(thisCar, "17\" wheels");
console.log(thisCar.info);

// ***************************************************************
// Decorator Typescipt
// ***************************************************************


