import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import Modal from '@material-ui/core/Modal';
import { ViewAddPicture } from './addpicture'
import SignUpForm from '../redux/viewSignUp'
import Fade from '@material-ui/core/Fade';
import { Provider } from 'react-redux';
import { getProfileFetch, logoutUser } from '../redux/signup/signupAction'

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

function Header({ currentUser, getProfileFetch, logoutUser }) {
    useEffect(() => {
        getProfileFetch();
    }, []);
    
    const useStyles = makeStyles((theme) => ({
        container: {
            height: 225,
            width: '100%',
            backgroundColor: 'grey',
        },
        instagram: {
            textTransform: "none",
        },
        mainName: {
            fontSize: 100,
            fontFamily: 'Dancing Script !important',
        },
        button: {
            marginRight: '10px'
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            border: '2px solid #000',
        },
        paper: {
            position: 'absolute',
            backgroundColor: 'grey',
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3)
        }

    }));
    const [open, setOpen] = React.useState(false);
    const [openSignUp, setOpenSignUp] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const signUpOpen = () => {
        setOpenSignUp(true)
    }
    const signUpClose = () => {
        setOpenSignUp(false)
    }


    const handleLogoutClick = event => {
        event.preventDefault();
        localStorage.removeItem("token");
        setOpenSignUp(false);
        logoutUser();
    }

    return (
        <Grid container spacing={0} justify="space-between" className={classes.container}>
            <Grid>
                <Grid container direction="row">
                    <Button
                        variant="text"
                        startIcon={<InstagramIcon />}
                        href="http://instagram.com/ivan.painter/"
                        className={classes.instagram}
                    >
                        <label>
                            {/* <a href="http://instagram.com/ivan.painter/">@ivan.painter</a> */}
                        </label>
                    </Button>

                </Grid>
            </Grid>
            <Grid>
                <Grid container direction="row">
                    {currentUser && currentUser.isAuthorized ?
                    <Button variant="contained" className={classes.button} onClick={handleOpen}>Add Picture</Button>:<p/>}
                    <Modal className={classes.modal}
                        open={open}
                        onClose={handleClose}
                    >
                        <Fade style={modalStyle} className={classes.paper}>
                            <ViewAddPicture />
                        </Fade>
                    </Modal>
                    {currentUser && currentUser.isAuthorized ? <Button onClick={handleLogoutClick}>Log Out</Button> : <Button variant="contained" onClick={signUpOpen}>Login</Button>}
                    <Modal className={classes.modal}
                        open={openSignUp}
                        onClose={signUpClose}
                    >
                        <Fade style={modalStyle} className={classes.paper}>
                            <Provider store={store} >
                                <SignUpForm setOpenSignUp={setOpenSignUp}/>
                            </Provider>
                        </Fade>
                    </Modal>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid item xs={12}>
                    <label className={classes.mainName}>ArtGallery</label>
                </Grid>
            </Grid>
        </Grid>
    );
}
const mapStateToProps = state => {
    return {
        currentUser: state.signup.currentUser
    }
}
const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
    logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);