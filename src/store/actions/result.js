import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
    return{
        type: actionTypes.STORE_RESULTS,
        res: res
    }
}
//allows you to write action creators that return a function instead of an action. So that you can run asynchronous code first. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
export const storeResults = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res));
        },2000);
    }

    //A function that will get executed by redux-thunk, using dispatch as an argument for the second function. They never make it to the reducer, only as a utility step in between to run our asynchronous code
};


export const deleteResults = (id) => {
    return{
        type: actionTypes.DELETE_RESULTS,
        resultElId: id
    }
};