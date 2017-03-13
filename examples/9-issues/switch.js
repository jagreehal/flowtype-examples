// @flow

type Action = {| type: 'a' |} | {| type: 'b' |};

// doesn't tell us c wasn't even an option

function reducer(action: Action) {
  switch (action.type) {
    case 'c':
      return 'oh no';

  }
}
