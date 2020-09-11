import {appConstants} from "../constant";

const initialState={
    token:null,
    id: null,
    islogin:false
}

export const authReducer=(state=initialState, action)=>{
    switch (action.type) {
        case appConstants.loginAction:
            state={...state};
            console.log(action);
            state.token = action.payload.data.jwttoken;
            localStorage.setItem('token',action.payload.data.jwttoken);
            state.islogin = true;
            state.id=action.payload.data.userID;
            return state;
        case appConstants.logoutAction:
            state={...state};
            state.islogin=false;
            localStorage.clear();
            return state;

        default:
            return state;
    }
}
