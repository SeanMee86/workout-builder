import {
    ADD_WORKOUT,
    ADD_TO_WORKOUT,
    REMOVE_FROM_WORKOUT,
    SHOW_MODAL,
    HIDE_MODAL,
    NAME_WORKOUT, CLEAR_WORKOUT, GET_WORKOUTS
} from "../actions/types";

const initialState = {
    workoutName: '',
    workout: [],
    workouts: [],
    showModal: false
};

const addWorkout = (state) => {
    return {
        ...state
    };
};

const showModal = (state) => {
    return{
        ...state,
        showModal: true
    }
};

const hideModal = (state) => {
    return {
        ...state,
        showModal: false
    }
};

const addToWorkout = (state, action) => {
    const newWorkout = state.workout.concat(action.payload);
    console.log(newWorkout);
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

const getWorkouts = (state, action) => {
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
        case SHOW_MODAL: return showModal(state);
        case HIDE_MODAL: return hideModal(state);
        case NAME_WORKOUT: return nameWorkout(state, action);
        case CLEAR_WORKOUT: return clearWorkout(state);
        case GET_WORKOUTS: return getWorkouts(state, action);
        default: return state;
    }
};

export default workoutReducer;