import { combineReducers } from "redux";
import userReducer from './userReducer'
import exerciseReducer from "./exerciseReducer";
import workoutReducer from "./workoutReducer";
import uiReducer from "./uiReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    user: userReducer,
    exercises: exerciseReducer,
    workouts: workoutReducer,
    ui: uiReducer,
    errors: errorReducer
})