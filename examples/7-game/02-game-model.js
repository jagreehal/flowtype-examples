// @flow

import { type Card } from './01-card';

type Game = {
  status: string
  // previousCards: Card[],
  // currentCard: Card,
  // remainingCards: Card[]
};

// need to be able to set game to initial state to not started
let notStartedGame: Game = { status: 'notStarted' };

// a started game should have cards... but not of these will be typed checked
let startedGame: Game = { 
  status: 'started',
  previousCards: ['donkey'],
  currentCard: null,
  remainingCards: [true] 
};
