import { call, fork, put, take } from "redux-saga/effects";
import { IMAGES } from "../constants";
import { fetchImageStats } from "../api";
import { setImageStatsError, loadImageStats, setImageStats } from "../actions";

function* handleStatsRequest(id) {
    //console.log('Fetching stats for image with id: ', id)
    //set a retry cap -> if there are errors, retry n times and stop
    for (let index = 0; index < 3; index++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStats(id, res.downloads.total))
            return true; //will exit saga
        } catch (error) {

        }

    }

    // after three tries (if no success), the error will be fired.
    yield put(setImageStatsError)

}

export default function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);


        for (let i = 0; i < images.length; i++) {
            //call the worker saga to handle the task; allows multiple handler sagas to work simultaneously (non-blocking while call would block)
            yield fork(handleStatsRequest, images[i].id)
        }
    }
}