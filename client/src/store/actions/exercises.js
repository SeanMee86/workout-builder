import {
    CLEAR_EXERCISES,
    GET_EXERCISES,
    LOAD_EXERCISE
} from "./types";

import axios from 'axios';

export const getExercises = () => dispatch => {
    axios.get('/api/exercises')
        .then((res)=> {
            dispatch({
                type: GET_EXERCISES,
                payload: res.data
            })
        }).catch(err => {
            console.log(err);
    });
};

export const clearExercises = () => ({
    type: CLEAR_EXERCISES
});

export const loadExercise = (exercise) => ({
    type: LOAD_EXERCISE,
    payload: exercise
});