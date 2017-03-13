// @flow

import { type Card } from './01-card';

type Game =
  | {| status: 'notStarted' |}
  | {|
      +status: 'started' | 'won' | 'lost',
      previousCards: $ReadOnlyArray<Card>,
      +currentCard: Card,
      remainingCards: $ReadOnlyArray<Card>
    |};

let startedGame: Game = {
  status: 'started',
  previousCards: [],
  currentCard: { value: 1, display: 'A', suit: 'clubs', flipped: false },
  remainingCards: [{ value: 2, display: '2', suit: 'clubs', flipped: false }]
};

type Guess = 'high' | 'low';

type Action = {| type: 'guess', guess: Guess |};

function reducer(state: Game, action: Action): Game {
  switch (action.type) {
    case 'guess':
      // not complete but good enough for this example!

      // first check state is valid for action
      if (state.status === 'notStarted') {
        console.error('Flow would NOT allowed us here!');
        return state;
      }
      // #FlowSaysNo – cannot access props that are not in action
      console.log(action.foo);
      
      let nextCard = state.remainingCards[0]; // if there isn't a next card the user has won!
      if (!nextCard) {
        // #FlowSaysNo – status is read-only
        state.status = 'won';
        return state;
      } // work out if guess is OK
      let guessIsOK: boolean;
      if (action.guess === 'high') {
        guessIsOK = nextCard.value > state.currentCard.value;
      } else {
        guessIsOK = state.currentCard.value > nextCard.value;
      } // if not
      if (!guessIsOK) {
        // #FlowSaysNo – status is read-only
        state.status = 'lost';
        return state;
      }
      // #FlowSaysNo – previousCards is read-only
      state.previousCards.push(state.currentCard);

    // #FlowSaysNo – currentCard is read-only
      state.currentCard = state.remainingCards[0];

      // #FlowSaysNo – remainingCards is read-only
      state.remainingCards.splice(0, 1);
      return state;
    default:
      return state;
  }
}
