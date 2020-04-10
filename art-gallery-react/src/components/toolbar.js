import React from 'react';
import { Filter } from './filter'
import { AddPicture } from './addpicture'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



export function ToolBar() {
    return (
        <Grid container spacing={0} >
            
            <Grid item xs={12} >
                <Filter />
            </Grid>
        </Grid>
    )
}