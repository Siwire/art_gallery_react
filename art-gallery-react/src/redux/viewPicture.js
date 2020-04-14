import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPictures } from './pictureActions';
import { PictureCard } from '../components/picturecard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

function PictureCards({ picture, fetchPictures }) {
    const { pictures } = picture;
    useEffect(() => {
        fetchPictures();
    }, []);
    const useStyles = makeStyles({
        container: {
            padding: '20px',
        }
    })
    const viewfield = useStyles();
    return (
        <Grid
            container
            direction="row"
            justify="center"
            spacing={0}
            >
            {
                pictures && pictures.map(picture => <Grid key={picture._id} className={viewfield.container}><PictureCard pictureInfo={picture} /></Grid>)
            }
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        picture: state.picture
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchPictures: () => dispatch(fetchPictures())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PictureCards);
