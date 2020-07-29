import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

export function LoginForm({ userLoginFetch }) {
    const useStyles = makeStyles(() => ({
        window: {
            backgroundColor: '#666666',
            margin: 30
        },
        parametres: {
            margin: 30
        }
    }));
    const classes = useStyles();

    const [loginInfo, setLoginInfo] = React.useState({
        username: "",
        password: "",
    })
    const [open, setOpen] = React.useState(
        false);
    const handleChange = event => {
        setLoginInfo({
            ...loginInfo,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = event => {
        event.preventDefault();
        userLoginFetch(loginInfo);
    }

    return (
        <Grid>
            <form onSubmit={handleSubmit} >
                <Grid container spacing={0} direction="column" justify="center" className={classes.window}>
                    <Grid className={classes.parametres}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Username</InputLabel>
                            <OutlinedInput id="component-outlined" name='username' placeholder='Username' value={loginInfo.username} onChange={handleChange} label="Name" />
                        </FormControl>
                    </Grid>
                    <Grid className={classes.parametres}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Password</InputLabel>
                            <OutlinedInput id="component-outlined" type='password' name='password' placeholder='Password' value={loginInfo.password} onChange={handleChange} />
                        </FormControl>
                    </Grid>
                    <Grid className={classes.parametres}>
                        <Button type='submit' variant="contained" >Log In</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}