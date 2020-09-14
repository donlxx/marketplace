import axios from 'axios'
import {appConstants} from "../constant";

export const login = (username, password) => {
    const authData = {
        username: username,
        password: password,
        returnSecureToken: true
    };
    let url = 'http://localhost:8080/authenticate';

    async function signIn() {
        return axios.post(url, authData);
    }

    const loginPromise = signIn();

    return {
        type: appConstants.loginAction,
        payload: loginPromise
    };
}
export const checkLogin=()=>{
    return {
        type: appConstants.checkLoginAction,
        payload:null
    }
}
export const logout = () => {

    return {
        type: appConstants.logoutAction,
        payload: null
    }
}
export const register=(username,password)=>{
    const authData = {
        username: username,
        password: password,
        returnSecureToken: true
    };
    let url = 'http://localhost:8080/register';

    async function signUp() {
        return axios.post(url, authData);
    }

    const registerresult = signUp()
        .then(res=>{
            console.log(res);
        })

}
