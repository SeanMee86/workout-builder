import React from 'react';
import {
    GET_USER_WORKOUTS,
    LOGIN_USER,
    LOGOUT_USER,
    HIDE_MODAL,
    SET_MODAL_CONTENT,
    SHOW_MODAL
} from "./types";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { setErrors } from "./errors";

import setAuthToken from "../../shared/utilities/setAuthToken";

const refreshUserWorkouts = (payload, dispatch) => {
    dispatch({
        type: GET_USER_WORKOUTS,
        payload
    })
    dispatch({
        type: HIDE_MODAL
    })
}

const showUserWorkoutAddedMessage = (data, dispatch) => {
    let content = (<div>{data}</div>);

    if(data.workoutData) {
        content = (
            <div>
                <strong>{data.workoutData.name}</strong> has been added to your workouts!
            </div>
        );
    }

    dispatch({
        type: SET_MODAL_CONTENT,
        payload: content
    })
    dispatch({
        type: SHOW_MODAL
    })
}

export const getUserWorkouts = () => dispatch => {
    const userId = jwt_decode(localStorage.jwtToken).id;
    const data = { userId };
    axios.post('/api/auth/getworkouts', data)
        .then(res => {
            dispatch({
                type: GET_USER_WORKOUTS,
                payload: res.data
            })
        })
};

export const addToUserWorkouts = (workoutData) => dispatch => {
    const data = {
        userId: jwt_decode(localStorage.jwtToken).id,
        workoutData
    };
    axios.post('/api/auth/workouts', data)
        .then(res => {
            showUserWorkoutAddedMessage(res.data, dispatch);
            dispatch({
                type: GET_USER_WORKOUTS,
                payload: res.data.userWorkouts
            })
        })
        .catch(err => console.log(err))
};

export const updateUserWorkout = (workout) => dispatch => {
    const userId = jwt_decode(localStorage.jwtToken).id;
    const data = {
        userId,
        workout
    };
    axios.put('/api/auth/workouts', data)
        .then((res) => refreshUserWorkouts(res.data, dispatch))
};

export const deleteUserWorkout = (workoutId) => dispatch => {
    const userId = jwt_decode(localStorage.jwtToken).id;
    const data = {
        userId,
        workoutId
    };
    axios.delete('/api/auth/workouts', {data})
        .then(res => refreshUserWorkouts(res.data, dispatch))
};

export const loginUser = (formData, history) => dispatch => {
    axios.post('/api/auth/login', formData)
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
    axios.post('/api/auth/register', formData)
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
