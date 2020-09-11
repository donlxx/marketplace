import {appConstants} from "../constant";

export const productReducer = (state = {rowData:[],data:[]}, action) => {
    switch (action.type) {

        case appConstants.Get_Product:
            state = {...state};
            if(!action.payload.data) return state;
            state.rowData=[...action.payload.data];
            state.data=[...action.payload.data];
            return state;
        // case appConstants.Get_ProductById:
        //     return action.payload.data;
        case appConstants.searchButton:

            state = {...state};
            state.data=[...action.payload];
            // console.log(state);
            return state;
        case appConstants.searchClearButton:
            state={...state};
            state.data=[...state.rowData];
            return state;
        default:
            return state;

    }
}
