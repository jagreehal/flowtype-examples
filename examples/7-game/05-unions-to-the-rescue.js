// @flow

import { type Card } from './01-card';

type Game =
  | {| status: 'notStarted' |}
  | {| 
      status: 'started',
      previousCards: Card[],
      currentCard: Card,
      remainingCards: Card[]
    |};

// #FlowSaysNo – not started game cannot have currentCard
let notStartedGame: Game = { 
  status: 'notStarted',
  currentCard: { value: 1, display: 'A', suit: 'clubs' , flipped: false}
 };

 let okNotStartedGame: Game = {
   status: 'notStarted'
 } 

// #FlowSaysNo – not started game must have currentCard
let startedGame: Game = { 
  status: 'started',
  previousCards: [],
  remainingCards: [] 
};

let okStartedGame: Game = { 
  status: 'started',
  previousCards: [],
  currentCard: { value: 1, display: 'A', suit: 'clubs' , flipped: false},
  remainingCards: [] 
};
