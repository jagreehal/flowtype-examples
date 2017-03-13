// @flow

import React from 'react';
type Props = {|
  foo: string,
  bar: number
|};

class MyComponentFlow extends React.Component<void, Props, void> {}

// #FlowSaysNo – see https://github.com/facebook/flow/issues/3185
let example = <MyComponentFlow foo="test" bar={42} />;
