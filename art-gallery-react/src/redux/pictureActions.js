import axios from 'axios';

import {
    FETCH_PICTURE_REQUEST,
    FETCH_PICTURE_SUCCESS,
    SET_UPLOAD_FILE,
    SUCCESS_UPLOAD_FILE,
    SET_FIELD_VALUE
} from './pictureTypes';
import { TableBody } from '@material-ui/core';

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
export const setUploadFile = data => ({
    type: SET_UPLOAD_FILE,
    payload: data,
});

const setFieldValue = (target, value) => {
    return {
        type: SET_FIELD_VALUE,
        payload: { target, value }
    }
}

export const setFieldValueAction = (target, value) => {
    return (dispatch) => {
        dispatch(setFieldValue(target, value))
    }
}

/*export const successUploadFile = id => ({
    type: SUCCESS_UPLOAD_FILE,
    payload: id,
})*/
export const fetchUploadPicture = (pictureInfo) => async dispatch => {
    console.log(pictureInfo, 'dasdaasdsadasd');
    const formPayload = new FormData();
    Object.entries(pictureInfo).forEach(([name, value]) => {
        formPayload.append(name, value);
    })
    const options = { headers: { 'Content-Type': `multipart/forma-data, boundary=${formPayload._boundary}:` } };
    const response = await axios.post('http://localhost:8000/picture', formPayload, options);

    // if (files.length) {
    //     files.forEach(async file => {
    //         const formPayload = new FormData()
    //         formPayload.append('file', file.file)


    //         await axios({
    //             baseURL: 'http://localhost:8000',
    //             url: 'picture',
    //             method: 'post',
    //             data: formPayload,

    //         })
    //        dispatch(setUploadFile(file))
        
    //     })
}


    /*console.log(data, 'data');
    return () => {
        axios.post(
            'http://localhost:8000/picture',
            data,
            { headers: { 'Content-Type': `multipart/forma-data, boundary=${data._boundary}:` } }
        )
        
    }*/




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