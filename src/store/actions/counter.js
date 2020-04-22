import * as actionTypes from './actionTypes';

export const increment = () => {
    return{
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return{
        type: actionTypes.DECREMENT
    }
};

export const add5 = () => {
    return{
        type: actionTypes.ADD5,
        value: 5
    }
};

export const subtract5 = () => {
    return{
        type: actionTypes.SUBTRACT5,
        value: 5
    }
};
