import {SET_ERRORS, REMOVE_ERRORS, REMOVE_ALL_ERRORS} from "./types";

export const setErrors = (errors) => ({
    type: SET_ERRORS,
    payload: errors
});

export const removeErrors = (field) => {
    return {
        type: REMOVE_ERRORS,
        field
    }
};

export const removeAllErrors = () => {
    return {
        type: REMOVE_ALL_ERRORS
    }
};