import {
    HIDE_MODAL,
    SHOW_MODAL,
    SET_MODAL_CONTENT
} from "./types";

export const showModal = () => {
    return {
        type: SHOW_MODAL
    }
};

export const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
};

export const setModalContent = (component) => {
    return {
        type: SET_MODAL_CONTENT,
        payload: component
    }
};