// @flow

import { type resultFromB } from './types';

const libA = require('./libA');
const libB = require('./libB');

async function doStuff(something): Promise<resultFromB> {
  let inputIntoA = {
    could: true,
    be: 1,
    anything: 'foo'
  };

  let resultFromA = await libA(inputIntoA);
  
  let requestToB = {
    who: resultFromA.title,
    really: resultFromA.something.toString(),
    knows: resultFromA.mightBeThere || ''
  };

  return await libB(requestToB);
}

doStuff('fingers crossed')
  .then(r => console.log(r.longString))
  .catch(e => console.error(e));
