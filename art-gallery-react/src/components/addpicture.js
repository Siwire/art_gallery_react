import React from 'react';
import store from '../redux/store';
import { Provider } from 'react-redux';
import AddPicture from '../redux/viewAddPicture'

export function ViewAddPicture() {
    return (
        <Provider store={store} >
            <AddPicture />
        </Provider>
    )
}