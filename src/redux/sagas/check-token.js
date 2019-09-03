import {call} from 'redux-saga/effects'
import history from '../../history';
import Service from "../../service";

export function* checkToken() {
    try {
        const token = localStorage.getItem("token");
        yield call(Service.checkToken, {token});
        history.push('/landingPage')
    } catch (e) {
        history.push('/')
    }
}