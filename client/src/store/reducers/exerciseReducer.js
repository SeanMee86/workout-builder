import {
    CLEAR_EXERCISES,
    GET_EXERCISES,
    LOAD_EXERCISE
} from '../actions/types';

const initialState = {
    exercises: null,
    exerciseToAdd: {}
};

const getExercises = (state, action) => {
    return {
        ...state,
        exercises: action.payload
    };
};

const clearExercises = (state) => {
    return {
        ...state,
        exercises: null
    };
};

const loadExercises = (state, action) => {
    return {
        ...state,
        exerciseToAdd: {
            ...state.exerciseToAdd,
            ...action.payload
        }
    };
};

const exerciseReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_EXERCISES: return getExercises(state, action);
        case CLEAR_EXERCISES: return clearExercises(state);
        case LOAD_EXERCISE: return loadExercises(state, action);
        default: return state;
    }
};

export default exerciseReducer;