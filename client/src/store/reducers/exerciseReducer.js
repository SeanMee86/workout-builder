import {CLEAR_EXERCISES, GET_EXERCISES, LOAD_EXERCISE} from '../actions/types';

const initialState = {
    exercises: null,
    exerciseToAdd: {}
};

const exerciseReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_EXERCISES:
            return {
                ...state,
                exercises: action.payload
            };
        case CLEAR_EXERCISES:
            return {
                ...state,
                exercises: null
            };
        case LOAD_EXERCISE:
            return {
                ...state,
                exerciseToAdd: {
                    ...state.exerciseToAdd,
                    ...action.payload
                }
            };
        default: return state;
    }
};

export default exerciseReducer;