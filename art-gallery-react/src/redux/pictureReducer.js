import { FETCH_PICTURE_REQUEST, FETCH_PICTURE_SUCCESS } from "./pictureTypes"

const initialState = {
    pictures: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PICTURE_REQUEST:
            return {
                ...state,
            }
        case FETCH_PICTURE_SUCCESS:
            return {
                pictures: action.payload
            }
        default: return state
    }
}

export default reducer;