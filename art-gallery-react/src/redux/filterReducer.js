import { FETCH_FILTER_REQUEST, FETCH_FILTER_SUCCESS } from "./filterTypes"

const initialState = {
    filters: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILTER_REQUEST:
            return {
                ...state,
            }
        case FETCH_FILTER_SUCCESS:
            console.log(action,'lkjlkjlkjlkjklj');
            
            return {
                filters: action.payload
            }
        default: return state
    }
}

export default reducer;