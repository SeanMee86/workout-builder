import {combineReducers} from "redux";
import userWorkoutReducer from './userWorkouts'

export default combineReducers({
    userWorkouts: userWorkoutReducer
})