import {GET_EXERCISES} from "./types";
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