import {
    GET_USER_WORKOUTS,
    LOGIN_USER,
    LOGOUT_USER,
    HIDE_MODAL
} from "./types";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { setErrors } from "./errors";

import setAuthToken from "../../shared/utilities/setAuthToken";

export const getUserWorkouts = () => dispatch => {
    const userId = jwt_decode(localStorage.jwtToken).id;
    const data = { userId };
    axios.post('/api/users/getworkouts', data)
        .then(res => {
            dispatch({
                type: GET_USER_WORKOUTS,
                payload: res.data
            })
        })
};

export const deleteUserWorkout = (workoutId) => dispatch => {
    const userId = jwt_decode(localStorage.jwtToken).id;
    const data = {
        userId,
        workoutId
    };
    axios.delete('/api/users/workouts', {data})
        .then(res => {
            dispatch({
                type: GET_USER_WORKOUTS,
                payload: res.data
            });
            dispatch({
                type: HIDE_MODAL
            })
        })
};

export const loginUser = (formData, history) => dispatch => {
    axios.post('/api/users/login', formData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            dispatch(setUser(jwt_decode(token)));
            history.push('/');
        })
        .catch(err => {
            dispatch(setErrors(err.response.data))
        })
};

export const setUser = (decodedToken) => {
    return {
        type: LOGIN_USER,
        payload: decodedToken
    }
};

export const registerUser = (formData, history) => dispatch => {
    axios.post('/api/users/register', formData)
        .then(res => {
            history.push('/login')
        })
        .catch(err => {
            dispatch(setErrors(err.response.data));
        })
};

export const logOutUser = () => dispatch => {
    setAuthToken(false);
    localStorage.removeItem('jwtToken');
    dispatch({
        type: LOGOUT_USER
    })
};
