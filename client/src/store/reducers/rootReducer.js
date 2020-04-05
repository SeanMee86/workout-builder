import {combineReducers} from "redux";
import userReducer from './userReducer'
import exerciseReducer from "./exerciseReducer";

export default combineReducers({
    user: userReducer,
    exercises: exerciseReducer
})