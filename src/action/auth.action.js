import axios from 'axios'
import {appConstants} from "../constant";

export const login=(username, password)=>{
    const authData = {
        username: username,
        password: password,
        returnSecureToken: true
    };
    let url='http://localhost:8080/authenticate';

    async function signIn (){
       return axios.post(url,authData);
    }

    const loginPromise =signIn();


    return{
        type: appConstants.loginAction,
        payload: loginPromise
    };
}
export const logout=()=>{
    return {
        type: appConstants.logoutAction
    }
}
