import {
    ADD_WORKOUT,
    ADD_TO_WORKOUT,
    REMOVE_FROM_WORKOUT,
    NAME_WORKOUT,
    CLEAR_WORKOUT,
    GET_ALL_WORKOUTS
} from "../actions/types";

const initialState = {
    workoutName: '',
    workout: [],
    workouts: null
};

const addWorkout = (state) => {
    return {
        ...state
    };
};

const addToWorkout = (state, action) => {
    const newWorkout = state.workout.concat(action.payload);
    return {
        ...state,
        workout: newWorkout
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

const nameWorkout = (state, action) => {
    return {
        ...state,
        workoutName: action.payload
    }
};

const clearWorkout = (state) => {
    return {
        ...state,
        workout: [],
        workoutName: ''
    }
};

const getAllWorkouts = (state, action) => {
    return {
        ...state,
        workouts: action.payload
    }
};

const workoutReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_WORKOUT: return addWorkout(state);
        case ADD_TO_WORKOUT: return addToWorkout(state, action);
        case REMOVE_FROM_WORKOUT: return removeFromWorkout(state, action);
        case NAME_WORKOUT: return nameWorkout(state, action);
        case CLEAR_WORKOUT: return clearWorkout(state);
        case GET_ALL_WORKOUTS: return getAllWorkouts(state, action);
        default: return state;
    }
};

export default workoutReducer;