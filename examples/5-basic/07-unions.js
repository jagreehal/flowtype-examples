// @flow

type Result<T> = Success<T> | Error; 
type Success<T> = { status: '200', payload: T };
type Error = { status: '500', errorMessage: string };

type Response = {
    id: number
}

function isGreaterThanOne(input: number): Result<Response>{
    if (input > 1){
        return {status: '200', payload: {id: 1}}
    }    
    return {status: '500', errorMessage: 'x'}
}

let isGreater = isGreaterThanOne(Math.random());

if (isGreater.status === '200'){
    console.log(isGreater.payload.id);
    // #FlowSaysNo – can not access errorMessage
    console.log(isGreater.errorMessage);
}

