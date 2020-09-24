import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import PasswordIcon from "@material-ui/icons/VpnKey";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {makeStyles} from "@material-ui/core/styles";
import UsernameIcon from "@material-ui/icons/Person";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import {login} from "../action/auth.action";
import {appConstants} from "../constant";
import {Alert} from "./Alert";


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

export const Login = (props) => {
    const dispatch=useDispatch();
    const classes = useStyles();
    const history=useHistory();
    const auth=useSelector(state=>state.auth);

    const [user,setUser]=React.useState(
        {
            username:'',
            password:'',
            loginSuccess: false
        }
    );
    const handleFormControl = (event) => {
        const newUser = {...user};
        newUser[event.target.name] = event.target.value;
        // console.log(newUser);
        setUser(newUser);
    }
    const handleLogin=(event)=>{
        event.preventDefault();
       // console.log(user);
        dispatch(login(user.username,user.password));

         if(auth.islogin){
             setOpen(true);
             user.loginSuccess=true;

            // console.log('login success !!!');
         }
        //history.push(appConstants.productRoute);


    }
    // for control alert
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <Container component="main" maxWidth="xs" className='container' style={{height: '100%'}}>
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>




                <form className={classes.form} noValidate onSubmit={handleLogin}>
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
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            {/*<Example variant="body2"/>*/}
                        </Grid>
                        <Grid item>
                            <NavLink to={appConstants.registerRoute} variant="body2">
                                <button variant="body2" className="text-info">
                                    Sign Up
                                </button>
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {/*{redirectToProducts()}*/}
            {user.loginSuccess?  <Alert onClose={handleClose} severity="success">Login successfully!</Alert>
                  :null}




        </Container>
    );
}
