import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FilterCards from '../redux/viewFilter';
import { Grid } from '@material-ui/core';
import store from '../redux/store';
import { Provider } from 'react-redux';
import RadioFilter from '../redux/viewFilter'

export function Filter() {
   
    return (<Provider store={store} >
        <RadioFilter />
    </Provider>
    )
}