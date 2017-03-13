// @flow

type firstName = {
   first: string;
}
type lastName  = {
    last: string;
}
type fullName = firstName & lastName;

let full:fullName = {first: 'Jag', last: 'Reehal'};

interface Point {
  x: number,
  y: number
}

class MyPoint implements Point {
  x: number;
  y: number;
}