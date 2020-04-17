import { combineReducers } from "redux";
import userReducer from './userReducer'
import exerciseReducer from "./exerciseReducer";
import workoutReducer from "./workoutReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
    user: userReducer,
    exercises: exerciseReducer,
    workouts: workoutReducer,
    ui: uiReducer
})