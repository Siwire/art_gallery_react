import axios from 'axios';

import {
    FETCH_FILTER_REQUEST,
    FETCH_FILTER_SUCCESS, 
    SIZE_FILTER_VALUE,
    STYLE_FILTER_VALUE,
    COLOR_FILTER_VALUE,
    CLEAR_FILTER_VALUE
} from './filterTypes';

export const fetchFilterRequest = () => {
    return {
        type: FETCH_FILTER_REQUEST
    }
}

const fetchFilterSuccess = filters => {
    return {
        type: FETCH_FILTER_SUCCESS, 
        payload: filters
    }
}

const sendSizeValue = (sizeValue) => {
    return {
        type: SIZE_FILTER_VALUE,
        payload: sizeValue
    }
}

export const changeSizeFilterValue = sizeValue => {
    return (dispatch) => {
        dispatch(sendSizeValue(sizeValue));
    }
}
const sendStyleValue = (styleValue) => {
    return {
        type: STYLE_FILTER_VALUE, 
        payload: styleValue
    }
}
export const changeStyleFilterValue = styleValue => {
    return (dispatch) => {
        dispatch(sendStyleValue(styleValue));
    }
}
const sendColorValue = (colorValue) => {
    return {
        type: COLOR_FILTER_VALUE, 
        payload: colorValue
    }
}
export const changeColorFilterValue = colorValue => {
    return (dispatch) => {
        dispatch(sendColorValue(colorValue));
    }
}

const sendClearFilterValue = () => {
    return {
        type: CLEAR_FILTER_VALUE, 
    }
}
export const clearFilterValue = () => {
    console.log('here 2');
    return (dispatch) => {
        dispatch(sendClearFilterValue());
    }
}
export const fetchFilters = () => {
    return (dispatch) => {
        dispatch(fetchFilterRequest);
        axios.get('http://localhost:8000/initdata')
            .then(response => {
                const filters  = response.data;
                dispatch(fetchFilterSuccess(filters))
            });
    }
}