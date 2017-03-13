// @flow
import { type inputIntoB, type resultFromB } from '../types';

module.exports = function(input: inputIntoB): Promise<resultFromB> {
  return Promise.resolve({
    longString: `$(input.who) $(input.really) $(input.whos)`
  });
};
