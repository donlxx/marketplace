import {appConstants} from "../constant";

export const compareReducer = (state=[],action)=>{
        switch (action.type){
            case appConstants.addCompare:
                state=[...state];
                state.push(action.payload);
                return state;
            case appConstants.clearCompare:
                state=[];
                return state;
            case appConstants.clearCompareById:
                console.log(state);
                console.log(action);
                let newState=state.filter(e=>{return e.id!==action.payload})
                console.log('adchisduhcu');
                console.log(newState);
                return newState;
            default:
                return state;

}

}
