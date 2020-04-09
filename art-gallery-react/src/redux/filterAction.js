import axios from 'axios';

import {
    FETCH_FILTER_REQUEST,
    FETCH_FILTER_SUCCESS
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

export const fetchFilters = () => {
    return (dispatch) => {
        dispatch(fetchFilterRequest);
        axios.get('http://localhost:8000/initdata')
            .then(response => {
                const filters  = response.data;
                console.log(response)
                console.log(filters, '1111111111111111filters')
                dispatch(fetchFilterSuccess(filters))
            });
    }
}