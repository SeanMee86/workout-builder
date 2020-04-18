import {
    REMOVE_ERRORS,
    SET_ERRORS,
    REMOVE_ALL_ERRORS
} from '../actions/types'

const initialState = {};

const setErrors = (state, action) => {
    return {
        ...state,
        ...action.payload
    }
};

const removeErrors = (state, action) => {
    return {
        ...state,
        [action.field]: ''
    };
};

const removeAllErrors = () => {
    return {}
};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERRORS: return setErrors(state, action);
        case REMOVE_ERRORS: return removeErrors(state, action);
        case REMOVE_ALL_ERRORS: return removeAllErrors();
        default: return state;
    }
};

export default errorReducer;