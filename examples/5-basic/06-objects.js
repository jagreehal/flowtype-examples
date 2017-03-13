// @flow

// flow objects use structural typing

type Car = {
  name: string
}

type Animal = {
  name: string
}

let car: Car = {
  name: 'bmw'
};

let animal: Animal = {
  name: 'lion'
};

let cars: Array<Car> = [];
cars.push(animal);

let animals: Array<Animal> = [];
animals.push(car);

// exact types
type AddWhateverYouWant = {
  a: string
}

let a: AddWhateverYouWant = {
  a: 'a',
  b: 'b'
}

type NothingMoreOrLess = {| b: string|};

// #FlowSaysNo – can not have more than specified
let b: NothingMoreOrLess = {
  a: 'a',
  b: 'b'
}

