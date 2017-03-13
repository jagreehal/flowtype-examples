// @flow

// because this won't work
// node examples/3-using-node-and-flow/index.js

// really we need to strip flow types by using 
// https://github.com/flowtype/flow-remove-types 
// e.g. node_modules/.bin/flow-node examples/3-using-node-and-flow/index.js
// e.g. node node_modules/.bin/flow-remove-types examples/3-using-node-and-flow/index.js > examples/3-using-node-and-flow/index-removed.js
// > index-removed.js
// node examples/3-using-node-and-flow/index-removed.js

// or 

// https://babeljs.io/docs/plugins/transform-flow-strip-types/
// e.g. babel-node examples/3-using-node-and-flow/index.js
// e.g. babel examples/3-using-node-and-flow/index.js --out-file examples/3-using-node-and-flow/index-compiled.js
// > index-compiled.js
// node examples/3-using-node-and-flow/index-compiled.js

function multiplyWithComments(x /*:number*/, y /*:number*/) {
  return x * y;
}

function multiply(x: number, y: number) {
  return x * y;
}

let result = multiplyWithComments(1, 2);
