// @flow

const _ = require('lodash');

let result = _.sum([1,2,3,4]);

// #FlowSaysNo charAt not in Number.prototype
let charAt0 = result.charAt(0);
