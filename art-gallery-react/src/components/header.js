import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { red } from '@material-ui/core/colors';

export function Header() {
    const useStyles = makeStyles({
        container: {
            height: 300,
            width: '100%',
            backgroundColor: 'grey',
        },
    });
    const classes = useStyles();
    return (
        <grid directional='column' className={classes.container}>
            <div class="row header__container">
                <div class="col-md-8"><mdb-icon fab icon="instagram"></mdb-icon>
                    <p>
                        <a href="http://instagram.com/ivan.painter/">@ivan.painter</a>
                    </p>
                </div>
            </div>
            <div >
                <h1><b>ArtGallery</b></h1>
            </div>
        </grid>
    );
}

