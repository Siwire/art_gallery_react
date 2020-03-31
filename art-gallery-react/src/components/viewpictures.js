import store from '../redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import { PictureCard } from './picturecard';
import UserContainer from '../redux/container';
export * from '../redux/actions'

export function ViewPictures() {
    return (
        <Provider store={store} >
            <UserContainer />
        </Provider>
    );
}
