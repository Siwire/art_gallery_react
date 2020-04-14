import { FETCH_PICTURE_REQUEST, FETCH_PICTURE_SUCCESS, SET_UPLOAD_FILE, SUCCESS_UPLOAD_FILE, SET_FIELD_VALUE } from "./pictureTypes"

const initialState = {
    pictures: [],
    pictureInfo: {
        size: null,
        style: null,
        color: null,
        title: '',
        file: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PICTURE_REQUEST:
            return {
                ...state,
            }
        case FETCH_PICTURE_SUCCESS:
            return {
                ...state,
                pictures: action.payload
            }
        case SET_UPLOAD_FILE:
            return {
                ...state,
                file: action.payload,
            }
        case SET_FIELD_VALUE:
            return {
                ...state,
                pictureInfo: {
                    ...state.pictureInfo,
                    [action.payload.target]: action.payload.value
                }
            }

       /* case SUCCESS_UPLOAD_FILE:
            return {
                ...state,
                file: action.payload
            }*/
        default: return state
    }
}

export default reducer;