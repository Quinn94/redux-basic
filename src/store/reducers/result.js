import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const resultReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})} 
        case actionTypes.DELETE_RESULTS:
            const updatedArray = state.results.filter(results => results.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray  
            }
    }
    return state;
}

export default resultReducer;