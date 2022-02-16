import { IMAGES } from "../constants";

// the loading state of the app is only true when action type is Images.load

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return true;
        case IMAGES.LOAD_SUCCESS:
            return false;
        case IMAGES.LOAD_FAIL:
            return false;

        default:
            return state;
    }
}

export default loadingReducer;