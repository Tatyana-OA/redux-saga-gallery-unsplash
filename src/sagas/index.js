import { takeEvery, put } from 'redux-saga/effects'


function* workerSaga() {
    //put lets us dispatch actions
    yield put({ type: 'ACTION_FROM_WORKER' })
}

//watcher saga
function* rootSaga() {
    // looks for a particular action and calls worker saga
    yield takeEvery('HELLO', workerSaga)

}

export default rootSaga;