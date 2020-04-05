import {ADD_WORKOUT, ADD_TO_WORKOUT, REMOVE_FROM_WORKOUT} from "../actions/types";

const initialState = {
    workout: []
};

const addWorkout = (state) => {
    return {
        ...state
    };
};

const addToWorkout = (state, action) => {
    if(state.workout.filter(exercise => exercise.id === action.payload.id).length < 1) {
        const newWorkout = state.workout.concat(action.payload);
        return {
            ...state,
            workout: newWorkout
        };
    }else{
        return state;
    }
};

const removeFromWorkout = (state, action) => {
    const elToSlice = state.workout.findIndex(exercise => exercise.id === action.payload.id);
    const newArray = [...state.workout];
    newArray.splice(elToSlice,1);
    return {
        ...state,
        workout: newArray
    };
};

const workoutReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_WORKOUT: return addWorkout(state);
        case ADD_TO_WORKOUT: return addToWorkout(state, action);
        case REMOVE_FROM_WORKOUT: return removeFromWorkout(state, action);
        default: return state;
    }
};

export default workoutReducer;