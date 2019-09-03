import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './redux/reducers';
import saga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();
let store;
if (process.env.NODE_ENV === 'development') {
    store = createStore(
        reducer,
        compose(
            applyMiddleware(sagaMiddleware)
            ,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
} else {
    store = createStore(
        reducer, applyMiddleware(sagaMiddleware)
    );
}

sagaMiddleware.run(saga);

export default store;
