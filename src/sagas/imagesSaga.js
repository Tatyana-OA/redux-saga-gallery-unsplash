import { takeEvery, select, call, put } from "redux-saga/effects";
import { IMAGES } from "../constants";

import fetchImages from "../api";
import { setImages, setError } from "../actions";

const getPage = state => state.nextPage;

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}

function* handleImagesLoad() {
    //getting page from the state, passing it onto the fetchImages call (which is the API call controlled by Saga each time there is a LOAD trigger)

    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page)
        yield put(setImages(images))
        console.log('Current images page: ', page)
    } catch (error) {
        //dispatch error action
        yield put(setError(error.toString()))
    }

}