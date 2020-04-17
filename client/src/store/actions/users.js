import {GET_USER_WORKOUTS, LOGIN_USER, LOGOUT_USER} from "./types";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
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

export const loginUser = (formData) => dispatch => {
    axios.post('/api/users/login', formData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            dispatch(setUser(jwt_decode(token)))
        })
        .catch(err => {
            console.log(err.response.data);
        })
};

export const setUser = (decodedToken) => {
    return {
        type: LOGIN_USER,
        payload: decodedToken
    }
};

export const registerUser = (formData, history) => dispatch => {
    console.log(formData);
    axios.post('/api/users/register', formData)
        .then(res => {
            console.log(res);
            history.push('/login')
        })
        .catch(err => {
            console.log(err.response.data);
        })
};

export const logOutUser = () => dispatch => {
    setAuthToken(false);
    localStorage.removeItem('jwtToken');
    dispatch({
        type: LOGOUT_USER
    })
};