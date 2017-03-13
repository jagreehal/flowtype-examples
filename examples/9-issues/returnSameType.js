// @flow

function echo<T>(input: T): T {
  if (typeof input === 'number') {      
    //return input * 2; // this line causes error
  }
  return input;
}

const str:string = echo('hi');


const y = echo(1); 
