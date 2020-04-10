import {
    ADD_TO_WORKOUT,
    REMOVE_FROM_WORKOUT,
    SHOW_MODAL,
    HIDE_MODAL, NAME_WORKOUT
} from "./types";

export const addToWorkout = (exercise) => {
    return {
        type: ADD_TO_WORKOUT,
        payload: exercise
    }
};

export const nameWorkout = (name) => {
    return {
        type: NAME_WORKOUT,
        payload: name
    }
};

export const showModal = () => {
    return {
        type: SHOW_MODAL
    }
};

export const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
};

export const removeFromWorkout = (exercise) => {
    return {
        type: REMOVE_FROM_WORKOUT,
        payload: exercise
    }
};
