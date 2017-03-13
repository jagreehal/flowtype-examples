// @flow

// flow classes use nominal typing

class Car {
  constructor(name: string) {
  }
}

class Animal {
  constructor(name: string) {
  }
}

let car = new Car('bmw');
let animal = new Animal('lion');

// #FlowSaysNo – not the same
let badCar: Car = new Animal('bear');

// #FlowSaysNo – can not mix
let cars: Array<Car> = []; 
cars.push(animal);

// #FlowSaysNo – can not mix
let animals: Array<Animal> = []; 
animals.push(car);



