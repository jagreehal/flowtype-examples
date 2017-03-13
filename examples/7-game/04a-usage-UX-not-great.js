// @flow

import { type Card } from './01-card';

type Game = {|
  status: string,
  previousCards?: Card[],
  currentCard?: Card,
  remainingCards?: Card[]
|};

// can add values that don't make sense
let notStartedGame: Game = { 
  status: 'notStarted',
  currentCard: { value: 1, display: 'A', suit: 'clubs' , flipped: false},
 };

// a started game can omit values - e.g. no current card
let startedGame: Game = { 
  status: 'started',
  previousCards: [],
  remainingCards: [] 
};

// #FlowSaysNo – have to check currentCard is defined before using
console.log(startedGame.currentCard.value)

console.log(startedGame.currentCard ? startedGame.currentCard.value : 'This should never happen');