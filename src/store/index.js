import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import createSagaMiddleware from 'redux-saga';

import rootSaga from "../sagas";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),

    )
    sagaMiddleware.run(rootSaga)
    return store;
}

export default configureStore