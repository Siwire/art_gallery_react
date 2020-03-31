import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPictures } from '../redux/actions';
import { PictureCard } from '../components/picturecard';
import Grid from '@material-ui/core/Grid';

function UserContainer({ picture, fetchPictures }) {
    const { pictures } = picture;
    useEffect(() => {
        fetchPictures();
    }, []);
    return (
        <Grid
            container
            direction="row"
            justify="center"
            spacing={3}
            >
            {
                pictures && pictures.map(picture => <Grid item><PictureCard pictureInfo={picture} /></Grid>)
            }
        </Grid>
    )
}

const mapStateToProps = state => {
    console.log(state, '33333333333333')
    return {
        picture: state.picture
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchPictures: () => dispatch(fetchPictures())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
