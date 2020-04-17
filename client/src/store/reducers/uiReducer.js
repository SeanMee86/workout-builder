import {
    SHOW_MODAL,
    HIDE_MODAL,
    SET_MODAL_CONTENT
} from "../actions/types";

const initialState = {
    showModal: false,
    modalContent: null
};

const showModal = (state) => {
    return{
        ...state,
        showModal: true
    }
};

const hideModal = (state) => {
    return {
        ...state,
        showModal: false
    }
};

const setModalContent = (state, action) => {
    return {
        ...state,
        modalContent: action.payload
    }
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL: return showModal(state);
        case HIDE_MODAL: return hideModal(state);
        case SET_MODAL_CONTENT: return setModalContent(state, action);
        default: return state;
    }
};

export default uiReducer;