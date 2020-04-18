import {SET_ERRORS} from '../actions/types'

const initialState = {

};

const setErrors = (state, action) => {
    return {
        ...state,
        ...action.payload
    }
};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERRORS: return setErrors(state, action);
        default: return state;
    }
};

export default errorReducer;