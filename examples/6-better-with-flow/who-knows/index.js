const libA = require('libA');
const libB = require('libB');

async function doStuff(something) {
  let inputIntoA = {
    could: true,
    be: 1,
    anything: 'foo'
  };

  let resultFromA = await libA(inputIntoA);

  // Some sort of mapping
  let requestToB = {
    who: resultFromA.title,
    really: resultFromA.something.toString(),
    knows: resultFromA.mightBeThere || ''
  };

  return await libB(requestToB);
}

doStuff('fingers crossed')
  .then(r => console.log(r))
  .catch(e => console.error(e));
