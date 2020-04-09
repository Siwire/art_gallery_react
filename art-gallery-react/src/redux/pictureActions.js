import axios from 'axios';

import {
    FETCH_PICTURE_REQUEST,
    FETCH_PICTURE_SUCCESS
} from './pictureTypes';

export const fetchPictureRequest = () => {
    return {
        type: FETCH_PICTURE_REQUEST
    }
}

const fetchPictureSuccess = pictures => {
    return {
        type: FETCH_PICTURE_SUCCESS, 
        payload: pictures
    }
}

export const fetchPictures = () => {
    return (dispatch) => {
        dispatch(fetchPictureRequest);
        axios.get('http://localhost:8000/pictures')
            .then(response => {
                const { pictures } = response.data;
                dispatch(fetchPictureSuccess(pictures))
            });
    }
}