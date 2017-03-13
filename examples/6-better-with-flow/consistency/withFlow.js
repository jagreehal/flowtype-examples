// @flow

type Result<T> = Success<T> | Error; 
type Success<T> = { success: true, payload: T };
type Error = { success: false, errorMessage: string };
 
// code review is simply to check each ajax result returns Result<T>

const serviceA = (): Result<string> => {
    return {
        success: true,
        payload: 'Hello From A' 
    }
}

const serviceB = (): Result<string> => {
    return {
        success: true,
        payload: 'Hello From B'
    }
}