// @flow
import React, {PropTypes} from 'react';

type Props = {
    foo: string,
    bar: number
}

class MyComponentProps extends React.Component {
  static propTypes = {
    foo: PropTypes.string,
    bar: PropTypes.number
  };
}

let badPropsExample = <MyComponentProps foo="test" bar="42"/>; 


class MyComponentFlow extends React.Component<void, Props, void> {  
}

let example = <MyComponentFlow foo="test" bar={42}/>;       

// #FlowSaysNo – foo is a number
let badExample = <MyComponentFlow foo="test" bar="42"/>; 
