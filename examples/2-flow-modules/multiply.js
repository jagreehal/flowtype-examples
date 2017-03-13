// @flow

function multiply(x, y) {
  return x * y;
}

function multiplyWithColon(x: number, y: number) {
  return x * y;
}

function multiplyWithComments(x /*:number*/, y /*:number*/) {
  return x * y;
}

module.exports = multiplyWithColon;
