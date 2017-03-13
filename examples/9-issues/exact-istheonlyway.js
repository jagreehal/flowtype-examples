// @flow

function sayHi(o: { name?: string }) {
  if (o.name) {
    return `Hi ${o.name}`;
  }
}

// without exact types this doesn't get caught
sayHi({ neme: 'I just misspelled name to neme' });
