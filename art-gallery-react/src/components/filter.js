import React from 'react';
import store from '../redux/store';
import { Provider } from 'react-redux';
import RadioFilter from '../redux/viewFilter'

export function Filter() {
    return (<Provider store={store} >
        <RadioFilter />
    </Provider>
    )
}