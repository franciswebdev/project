
// import the cars, car parts
import { SUV, Engine, Car, Coat } from './car-decorator';

// import the enums
import { FuelType } from './car-decorator';

test('Check info of car', () => {

  let mySUV = new SUV(
    "Honda CRV",
    new Engine(FuelType.DIESEL));

  expect(mySUV.info).toBe("Honda CRV is powered by diesel engine");
});

test('Test the car decorators', () => {

  class CarMock extends Car {
    get info() {
      return "";
    }
  }

  let car = new Coat(new CarMock(), "Red");
  expect(car.info).toBe("Red");
})