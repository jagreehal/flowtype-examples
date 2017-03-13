// @flow

const multiply = require('./multiply');

// #FlowSaysNo – can not multiply string
let badResult = multiply('a', 'y');

let result = multiply(1, 2); 