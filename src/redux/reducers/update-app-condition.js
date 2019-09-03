import * as c from "../../constants";

const initialState = {
    authorized: false,
    errorMessage: '',
    showSuccessMessage: false
};

const updateAppCondition = (state, action) => {
    if (state === undefined) {
        return (initialState)
    }
    switch (action.type) {
        case c.USER_AUTHORIZED_CHANGE_STATE:
            return {
                ...state.appCondition,
                authorized: true
            };
        case c.ERROR_HAPPENED:
            return {
                ...state.appCondition,
                errorMessage: action.payload
            };
        case c.SHOW_SUCCESS_MESSAGE:
            return {
                ...state.appCondition,
                showSuccessMessage: true
            };
        case c.HIDE_SUCCESS_MESSAGE:
            return {
                ...state.appCondition,
                showSuccessMessage: false
            };
        case c.RESET_STATE_ERROR_MESSAGE:
            return {
                ...state.appCondition,
                errorMessage: ''
            };
        default:
            return state.appCondition;
    }
};
export default updateAppCondition;