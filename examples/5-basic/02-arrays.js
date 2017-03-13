// @flow

// all of one type
let numberArray: Array<number>;

numberArray = [1, 2, 3];
// #FlowSaysNo – not a number
numberArray = ['a', 2, 3];


let numberArrayV2: number[];

numberArrayV2 = [1, 2, 3];
// #FlowSaysNo – not a number
numberArrayV2 = ['a', 2, 3];

// mixture
type Mixture = [number, string, boolean];

let mixture: Mixture;

mixture = [1, '2', false];
// #FlowSaysNo – does not match
mixture = ['a', 2, 3];

