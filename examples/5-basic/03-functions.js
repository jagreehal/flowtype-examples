// @flow

type ReturnMessage = {
  message: string
};

function echo(message: string): ReturnMessage {
  return { message };
}

function echoInferReturnType(message: ReturnMessage) {
  // return { messageeeeeeeee: message };
  return message;
}

// return types are important!
// #FlowSaysNo – can save typos
function fooWithoutReturnType(message: string): ReturnMessage {
  return { messageeeeeeeee: message };
}
