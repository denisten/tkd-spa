import {put} from 'redux-saga/effects'
import history from '../../history';
import * as c from "../../constants";

export function* hideSuccessMessage() {
    yield put({type: c.HIDE_SUCCESS_MESSAGE});
    history.push('/')
}