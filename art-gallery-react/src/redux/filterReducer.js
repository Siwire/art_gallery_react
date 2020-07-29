import { FETCH_FILTER_REQUEST, FETCH_FILTER_SUCCESS, SIZE_FILTER_VALUE, STYLE_FILTER_VALUE, COLOR_FILTER_VALUE, CLEAR_FILTER_VALUE } from "./filterTypes"

const initialState = {
    filters: {},
    sizeValue: null,
    styleValue: null,
    colorValue: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILTER_REQUEST:
            return {
                ...state,
            }
        case FETCH_FILTER_SUCCESS:
            return {
                ...state,
                filters: action.payload
            }
        case SIZE_FILTER_VALUE:
            return {
                ...state,
                sizeValue: action.payload
            }
        case STYLE_FILTER_VALUE:
            return {
                ...state,
                styleValue: action.payload
            }
        case COLOR_FILTER_VALUE:
            return {
                ...state,
                colorValue: action.payload
            }
        case CLEAR_FILTER_VALUE:
            return {
                ...state, 
                sizeValue: null,
                styleValue: null, 
                colorValue: null
            }
        default: return state
    }
}
export default reducer;