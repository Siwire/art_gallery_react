import store from '../redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import PictureCards from '../redux/viewPicture';

export function ViewPictures() {
    return (
        <Provider store={store} >
            <PictureCards />
        </Provider>
    );
}
