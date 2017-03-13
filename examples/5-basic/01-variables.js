// @flow

let foo: number = 5;

// #FlowSaysNo – cannot be a string
foo = 'five';

// any
let whatever: any;
whatever = 5;
whatever = 'five';

// #FlowSaysNo – Last Flow knew about it was a string
let bar: number = whatever;


let maybeString: ?string = 'maybe';

// #FlowSaysNo – can use maybeString without checking
console.log(maybeString.length);

console.log(maybeString ? maybeString.length : 0);