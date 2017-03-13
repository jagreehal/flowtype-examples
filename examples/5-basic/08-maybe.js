// @flow

type Must = {
  value: number
};

// #FlowSaysNo 
var a1: Must = { value: undefined };

// #FlowSaysNo
var a2: Must = { value: null };

var a3: Must = { value: 1 };

// #FlowSaysNo
var a4: Must = {};

type Optional = {
  value?: number
};

var x1: Optional = { value: undefined };

// #FlowSaysNo
var x2: Optional = { value: null };
var x3: Optional = { value: 1 };
var x4: Optional = {};

type Maybe = {
  value: ?number
};
var y1: Maybe = {
  value: undefined
};
var y2: Maybe = {
  value: null
};
var y3: Maybe = {
  value: 1
};

// #FlowSaysNo
var y4: Maybe = {};
type MaybeOptional = {
  value?: ?number
};
var z1: MaybeOptional = {
  value: undefined
};
var z2: MaybeOptional = {
  value: null
};
var z3: MaybeOptional = {
  value: 1
};
var z4: MaybeOptional = {};
