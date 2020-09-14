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
            if(!!action.error) return state;
            state.token = action.payload.data.jwttoken;
            localStorage.setItem('token',action.payload.data.jwttoken);
            state.islogin = true;
            state.id=action.payload.data.userID;
            return state;
        case appConstants.logoutAction:
            state={...state};
            state=initialState;
            return state;
        case appConstants.checkLoginAction:
            state={...state};
            const token=localStorage.getItem('token');
            if(!!token){
                state.token=token;
                state.islogin=true;
            }
            return state;
        // case appConstants.registerAction:
        //     state={...state};


        default:
            return state;
    }
}
