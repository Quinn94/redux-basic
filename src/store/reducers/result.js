import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const deleteResults = (state, action) => {
    const updatedArray = state.results.filter(results => results.id !== action.resultElId);
    return updateObject(state, {result: updatedArray})
}

const resultReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULTS:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.res})});

        case actionTypes.DELETE_RESULTS:
            return deleteResults(state, action);
    }
    return state;
}

export default resultReducer;