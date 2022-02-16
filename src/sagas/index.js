import { take, put, call, takeEvery } from 'redux-saga/effects';
import { IMAGES } from '../constants'


function* handleImagesLoad() {
    //put lets us dispatch actions
    console.log('fetching unsplash images')
}

//watcher saga
function* rootSaga() {
    //take -> handles only once, no matter how many times we dispatch an action; takeEvery -> handles each time an action is dispatched
    yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}

export default rootSaga;