import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { RegisterForm } from '../components/loginForms/registerForm'
import { LoginForm } from '../components/loginForms/loginForm';
import { userPostFetch } from './signup/signupAction';
import { userLoginFetch } from './signup/signupAction';


function SignUpForm({ userPostFetch, userLoginFetch, setOpenSignUp }) {
    console.log(setOpenSignUp, 'setOpenSignUp');
    
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

    const [loginForm, setLoginForm] = React.useState('LoginForm');
    const [registerTextQuestion, setRegicterTextQuestion] = React.useState('No account yet?')
    const [registerTextSelect, setRegicterTextSelect] = React.useState(' Sign up')
    const changeToSignUpForm = () => {
        setLoginForm('RegisterForm')
        setRegicterTextQuestion('Already have an account?')
        setRegicterTextSelect(' Login')
    }
    const changeLoginForm = () => {
        setLoginForm('LoginForm')
        setRegicterTextQuestion('No account yet?')
        setRegicterTextSelect(' Sign up')
    }
    const loginSubmit = (data) => {
        userLoginFetch(data);
        setOpenSignUp(false);
    }
    const registerSubmit = (data) => {
        userPostFetch(data);
        setOpenSignUp(false);
    }

    return (
        <Grid container spacing={0} justify="center" className={classes.window}>
            <Grid container spacing={0} direction='column' justify="center">
                {loginForm === 'LoginForm' ? <LoginForm userLoginFetch={loginSubmit}/> : <RegisterForm userPostFetch={registerSubmit} />}
                <Grid container spacing={0} direction='raw' justify="center">
                    <span>{registerTextQuestion} </span><span onClick={loginForm === 'LoginForm' ? changeToSignUpForm : changeLoginForm}>{registerTextSelect}</span>
                </Grid>
            </Grid>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo)),
    userLoginFetch: loginInfo => dispatch(userLoginFetch(loginInfo)),

});

export default connect(null, mapDispatchToProps)(SignUpForm);

