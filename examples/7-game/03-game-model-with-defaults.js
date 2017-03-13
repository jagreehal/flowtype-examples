// @flow

import { type Card } from './01-card';

type Game = {
  status: string,
  previousCards?: Card[],
  currentCard?: Card,
  remainingCards?: Card[]
};

// need to be able to set game to initial state to not started
let notStartedGame: Game = { status: 'notStarted' };

// a started game should have cards... but allows for typos -- see emainingCards'
let startedGame: Game = { 
  status: 'started',
  previousCards: [],
  currentCard: { value: 1, display: 'A', suit: 'clubs' , flipped: false},
  emainingCards: ['donkey'] // uh oh
};
