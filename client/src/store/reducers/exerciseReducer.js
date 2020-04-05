import {GET_EXERCISES} from '../actions/types';

const initialState = {
    exercises: null
};

const exerciseReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_EXERCISES:
            return {
                ...state,
                exercises: action.payload
            };
        default: return state;
    }
};

export default exerciseReducer;