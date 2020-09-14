import React, {useState} from "react";
import {useDispatch} from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import UsernameIcon from "@material-ui/icons/Person";
import PasswordIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import {appConstants} from "../constant";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {register} from "../action/auth.action";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export const Register = () => {
    const classes = useStyles();
    const [user, setUser] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
        error: false,
        success: false,
        message: '',
    });

    // const {username,password} =user;

    const dispatch = useDispatch();

    const handleFormControl = (event) => {
        const newUser = {...user};
        newUser[event.target.name] = event.target.value;
        // console.log(newUser);
        setUser(newUser);
    }

    // const register = (username,password) => {
    //     console.log(username,password);
    // }
    const clickSubmit = (event => {
        event.preventDefault();
        register(user.username,user.password);
        history.push(appConstants.testRoute);

    });


    const showError = () => {
        return (
            <div
                className="alert alert-danger"
                style={{display: user.error ? '' : 'none'}}
            >
                {user.message}
            </div>
        );
    }

    const showSuccess = () => {
        return (
            <div
                className="alert alert-info"
                style={{display: user.success ? '' : 'none'}}
            >
                New account is created. Please Check your email and sign in
            </div>
        );
    }
    const history = useHistory();
    return (
        <Container component="main" maxWidth="xs" className='container' style={{height: '100%'}}>
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>

                <form className={classes.form} noValidate onSubmit={clickSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Username"
                        name="username"
                        autoComplete="email"
                        type='string'
                        autoFocus
                        value={user.username}
                        onChange={handleFormControl}

                        InputProps={{
                            className: classes.input,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <UsernameIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={user.password}
                        onChange={handleFormControl}

                        InputProps={{
                            className: classes.input,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PasswordIcon/>
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="passwordConfirm"
                        label="Password Confirm"
                        type="password"
                        id="passwordConfirm"
                        // autoComplete="current-password"
                        value={user.passwordConfirm}
                        onChange={handleFormControl}

                        InputProps={{
                            className: classes.input,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PasswordIcon/>
                                </InputAdornment>
                            )
                        }}
                    />

                    {/*<FormControlLabel*/}
                    {/*    control={<Checkbox value="remember" color="primary"/>}*/}
                    {/*    label="Remember me"*/}
                    {/*    onChange={e => handleChange(e)}*/}
                    {/*/>*/}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={!user.username || !user.password}
                    >
                        Sign Up
                    </Button>
                    {/*<Grid container>*/}
                    {/*    <Grid item xs>*/}
                    {/*        /!*<Example variant="body2"/>*!/*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item>*/}
                    {/*       */}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                </form>
            </div>
            {/*{redirectToProducts()}*/}


        </Container>
    );
}
