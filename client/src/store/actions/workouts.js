import {
    ADD_TO_WORKOUT,
    REMOVE_FROM_WORKOUT,
    NAME_WORKOUT,
    CLEAR_WORKOUT,
    GET_ALL_WORKOUTS
} from "./types";
import axios from 'axios';

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

export const removeFromWorkout = (exercise) => {
    return {
        type: REMOVE_FROM_WORKOUT,
        payload: exercise
    }
};

export const clearWorkout = () => {
    return {
        type: CLEAR_WORKOUT
    }
};

export const getAllWorkouts = () => dispatch => {
    axios.get('/api/workouts')
        .then(res => {
            dispatch({
                type: GET_ALL_WORKOUTS,
                payload: res.data
            })
        })
};
