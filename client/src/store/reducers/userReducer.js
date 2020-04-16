import {GET_USER_WORKOUTS, LOGIN_USER, LOGOUT_USER} from "../actions/types";

const initialState = {
    userWorkouts: null,
    userId: null,
    isAuth: false
};

const loginUser = (state, action) => {
    return {
        ...state,
        userId: action.payload.id,
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

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER: return loginUser(state, action);
        case GET_USER_WORKOUTS:
            return {
                ...state,
                userWorkouts: action.payload
            };
        case LOGOUT_USER: return logoutUser;
        default:
            return state;
    }
};

export default userReducer;