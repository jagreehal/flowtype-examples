// @flow
import {type inputIntoA, type resultFromA } from '../types';

module.exports = async function(input: inputIntoA): Promise<resultFromA> {
  return Promise.resolve({
    something: 1,
    title: '',
    mightBeThere: ''
  });
};
