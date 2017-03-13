// @flow

const server = require('./server')(1);

const deferedServer = require('./server');

deferedServer(1);

// #FlowSaysNo – server requires number not string
deferedServer('2');

// #FlowSaysNo – server requires number not string
const badServer = require('./server')('a');

