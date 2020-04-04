import {GET_USER_WORKOUTS} from "../actions/types";

const initialState = {
    userWorkouts: null
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_WORKOUTS:
            return {
                ...state,
                userWorkouts: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;