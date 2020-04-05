import {combineReducers} from "redux";
import userReducer from './userReducer'
import exerciseReducer from "./exerciseReducer";
import workoutReducer from "./workoutReducer";

export default combineReducers({
    user: userReducer,
    exercises: exerciseReducer,
    workouts: workoutReducer
})