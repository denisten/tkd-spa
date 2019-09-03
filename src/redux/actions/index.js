import * as c from "../../constants";

export const userAuthorized = ({login, password}) => {
    return {
        type: c.USER_AUTHORIZED,
        payload: {
            login,
            password
        }
    }
};
export const redirectToRootComponent = () => {
    return {
        type: c.REDIRECT_TO_ROOT_COMPONENT
    }
};
export const userRegistration = ({ loginValue, passwordValue, mobilePhone, emailValue}) => {
    return {
        type: c.USER_REGISTRATION,
        payload: {
            loginValue, passwordValue, mobilePhone, emailValue
        }
    }
};
export const checkToken = () => {
    return {
        type: c.CHECK_TOKEN,
    }
};
export const logout = () => {
    return {
        type: c.LOGOUT,
    }
};