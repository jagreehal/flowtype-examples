// @flow

type Card = {|
    value: number,
    display: string
|};

var card: Card = {
    value: 1,
    display: 'A'
};

delete card['value'];
delete card.value;

// but we deleted value...
console.log(card.value);
