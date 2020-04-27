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
    let content = (
        <div>
            <h2>{data}</h2>
        </div>
    );

    if(data.workoutData) {
        content = (
            <div style={{
                textAlign: "center"
            }}>
                <h2>Success!</h2>
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
    axios.post('/api/users/getworkouts', data)
        .then(res => {
            dispatch({
                type: GET_USER_WORKOUTS,
                payload: res.data
            })
        })
};

export const addToUserWorkouts = (workoutData, history) => dispatch => {
    const data = {
        userId: jwt_decode(localStorage.jwtToken).id,
        workoutData
    };
    axios.post('/api/users/workouts', data)
        .then(res => {
            showUserWorkoutAddedMessage(res.data, dispatch);
            if(res.data.userWorkouts) {
                dispatch({
                    type: GET_USER_WORKOUTS,
                    payload: res.data.userWorkouts
                })
                history.push('/user/workouts');
            }
        })
        .catch(err => console.log(err))
};

export const updateUserWorkout = (workout) => dispatch => {
    const userId = jwt_decode(localStorage.jwtToken).id;
    const data = {
        userId,
        workout
    };
    axios.put('/api/users/workouts', data)
        .then((res) => {
            const successMessage = (
                <div>
                    <h2>Success</h2>
                    Your Workout Has Been Saved
                </div>)
            dispatch({
                type: GET_USER_WORKOUTS,
                payload: res.data
            })
            dispatch({
                type: SET_MODAL_CONTENT,
                payload: successMessage
            })
            dispatch({
                type: SHOW_MODAL
            })
            // refreshUserWorkouts(res.data, dispatch)
        })
};

export const deleteUserWorkout = (workoutId) => dispatch => {
    const userId = jwt_decode(localStorage.jwtToken).id;
    const data = {
        userId,
        workoutId
    };
    axios.delete('/api/users/workouts', {data})
        .then(res => refreshUserWorkouts(res.data, dispatch))
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
