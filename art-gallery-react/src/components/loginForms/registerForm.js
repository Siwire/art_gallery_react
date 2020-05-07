import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

export function RegisterForm({ userPostFetch }) {

    const useStyles = makeStyles(() => ({
        window: {
            backgroundColor: '#666666',
            margin: 30
        },
        parametres: {
            margin: 30
        }
    }));

    const [registerInfo, setRegisterInfo] = React.useState({
        username: "",
        password: "",
        email: "",
    })
    const classes = useStyles();

    const handleChange = event => {
        console.log(event.target.name)
        setRegisterInfo({
            ...registerInfo,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = event => {
        event.preventDefault();
        userPostFetch(registerInfo);
    }

    return (
        <Grid>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={0} direction="column" justify="center" className={classes.window}>
                    <Grid className={classes.parametres}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Login</InputLabel>
                            <OutlinedInput id="component-outlined" name='username' placeholder='Username' value={registerInfo.username} onChange={handleChange} label="Name" />
                        </FormControl>
                    </Grid>
                    <Grid className={classes.parametres}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Password</InputLabel>
                            <OutlinedInput id="component-outlined" name='password' placeholder='password' value={registerInfo.password} onChange={handleChange} label="Name" />
                        </FormControl>
                    </Grid>
                    <Grid className={classes.parametres}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">Email</InputLabel>
                            <OutlinedInput id="component-outlined" name='email' placeholder='email' value={registerInfo.email} onChange={handleChange} label="Name" />
                        </FormControl>
                    </Grid>
                    <Grid className={classes.parametres}>
                        <Button type='submit' variant="contained" >Create account 123123</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}

