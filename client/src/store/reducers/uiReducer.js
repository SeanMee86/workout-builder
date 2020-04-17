import {SHOW_MODAL, HIDE_MODAL} from "../actions/types";

const initialState = {
    showModal: false
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

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL: return showModal(state);
        case HIDE_MODAL: return hideModal(state);
        default: return state;
    }
};

export default uiReducer;