import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import Modal from '@material-ui/core/Modal';
import { ViewAddPicture } from './addpicture'
import { SignUpForm } from '../redux/viewSignUp'
import Fade from '@material-ui/core/Fade';
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export function Header() {
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
        setOpenSignUp(true)
    }
    

    return (
        <Grid container spacing={0} justify="space-between" className={classes.container}>
            <Grid>
                <Grid container direction="row">
                    <Button
                        variant="text"
                        startIcon={<InstagramIcon />}
                        href="https://google.com"
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
                    <Button variant="contained" className={classes.button} onClick={handleOpen}>Add Picture</Button>
                    <Modal className={classes.modal}
                        open={open}
                        onClose={handleClose}
                    >
                        <Fade style={modalStyle} className={classes.paper}>
                            <ViewAddPicture />
                        </Fade>
                    </Modal>
                    <Button variant="contained" onClick={signUpOpen}>Login</Button>
                    <Modal className={classes.modal}
                        open={openSignUp}
                        onClose={signUpClose}
                    >
                        <Fade style={modalStyle} className={classes.paper}>
                            <SignUpForm />
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

