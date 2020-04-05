import {ADD_TO_WORKOUT, REMOVE_FROM_WORKOUT} from "./types";

export const addToWorkout = (exercise) => {
    return {
        type: ADD_TO_WORKOUT,
        payload: exercise
    }
};

export const removeFromWorkout = (exercise) => {
    return {
        type: REMOVE_FROM_WORKOUT,
        payload: exercise
    }
};