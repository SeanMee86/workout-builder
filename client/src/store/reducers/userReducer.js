import {
    GET_USER_WORKOUTS,
    LOGIN_USER,
    LOGOUT_USER
} from "../actions/types";

const initialState = {
    userWorkouts: null,
    userId: null,
    userName: '',
    isAuth: false
};

const loginUser = (state, action) => {
    return {
        ...state,
        userId: action.payload.id,
        userName: action.payload.name,
        isAuth: true
    }
};

const logoutUser = (state) => {
    return {
        ...state,
        userId: null,
        isAuth: false
    }
};

const getUserWorkouts = (state, action) => {
    return {
        ...state,
        userWorkouts: action.payload
    }
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER: return loginUser(state, action);
        case GET_USER_WORKOUTS: return getUserWorkouts(state, action);
        case LOGOUT_USER: return logoutUser;
        default: return state;
    }
};

export default userReducer;
