// @flow

export type Card = {|
  +value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13,
  +display: 'A'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | 'J'
    | 'Q'
    | 'K',
  +suit: 'diamonds' | 'hearts' | 'clubs' | 'spades',
  +flipped: boolean
|};

// this is OK
let okCard: Card = { value: 1, display: 'A', suit: 'hearts', flipped: false };

// #FlowSaysNo – can't chnage values once set
okCard.value = 4;

// #FlowSaysNo – can't add props
let noExtraProps: Card = { value: 1, display: 'A', suit: 'hearts', flipped: false, foo: 'bar' };

// #FlowSaysNo – catches spelling error
let propSpellingError: Card = { balue: 1, display: 'A', suit: 'hearts', flipped: false };

// #FlowSaysNo – catches invalid value
let valueError: Card = { value: 0, display: 'A', suit: 'hearts', flipped: false };
