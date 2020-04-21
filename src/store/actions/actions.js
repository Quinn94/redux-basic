export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD5 = 'ADD5';
export const SUBTRACT5 = 'SUBTRACT5';
export const STORE_RESULTS = 'STORE_RESULTS';
export const DELETE_RESULTS = 'DELETE_RESULTS';


export const increment = () => {
    return{
        type: 'INCREMENT'
    }
};

export const decrement = () => {
    return{
        type: 'DECREMENT'
    }
};

export const add5 = () => {
    return{
        type: 'ADD5',
        value: 5
    }
};

export const subtract5 = () => {
    return{
        type: 'SUBTRACT5',
        value: 5
    }
};

export const storeResults = (res) => {
    return{
        type: 'STORE_RESULTS',
        res: res
    }
};


export const deleteResults = (id) => {
    return{
        type: 'DELETE_RESULTS',
        resultElId: id
    }
};