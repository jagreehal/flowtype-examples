// @flow

type Props = {
  foo: string,
  bar: number
};

function MyComponentFlow({ foo, bar }: Props) {
  return (
    <div>
      <h1>{foo} {bar * 20}</h1>      
    </div>
  );
}

let example = <MyComponentFlow foo="test" bar={42}/>;       

// #FlowSaysNo – foo is a number
let badExample = <MyComponentFlow foo="test" bar="42"/>; 