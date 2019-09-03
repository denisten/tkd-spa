import {call, put} from 'redux-saga/effects'
import Service from "../../service";
import * as c from "../../constants";

export function* registerUser(props) {
    try {
        yield put({ type: c.RESET_STATE_ERROR_MESSAGE});
        const {loginValue, passwordValue, emailValue, mobilePhone } = props.payload;
        yield call(Service.registration, {loginValue, passwordValue, emailValue, mobilePhone});
        yield put({type: c.SHOW_SUCCESS_MESSAGE})
    } catch (error) {
        yield put({type: c.ERROR_HAPPENED, payload: 'Username is reserved'})
    }
}
