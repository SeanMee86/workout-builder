import {GET_USER_WORKOUTS} from "./types";
import axios from 'axios';

export const getUserWorkouts = () => dispatch => {
    axios.get('/api/users')
        .then(res => {
            dispatch({
                type: GET_USER_WORKOUTS,
                payload: res.data[0].workouts
            })
        })
};