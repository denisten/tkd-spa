import {call, put, takeEvery} from 'redux-saga/effects'
import * as c from '../../constants';
import history from '../../history';
import Service from "../../service";
import {registerUser} from './register';
import {hideSuccessMessage} from './hide-success-message'
import {checkToken} from "./check-token";
import {logout} from "./logout";

// const getAppCondition = (state) => state.appCondition;
// const delay = (ms) => new Promise(res => setTimeout(res, ms)); // Use only if necessary

function* userAuthorized(props) {
    try {
        const {login, password } = props.payload;
        const response = yield call(Service.authorize, {login, password});
        yield put({ type: c.USER_AUTHORIZED_CHANGE_STATE});
        yield put({ type: c.RESET_STATE_ERROR_MESSAGE});
        localStorage.setItem("token", response.data.token);
        history.push('/landingPage')
    } catch (error) {
        yield put({type: c.ERROR_HAPPENED, payload: 'Wrong password/login'})
    }
}


function* saga() {
    yield takeEvery(c.USER_AUTHORIZED, userAuthorized);
    yield takeEvery(c.USER_REGISTRATION, registerUser);
    yield takeEvery(c.REDIRECT_TO_ROOT_COMPONENT, hideSuccessMessage);
    yield takeEvery(c.CHECK_TOKEN, checkToken);
    yield takeEvery(c.LOGOUT, logout);
}

export default saga;