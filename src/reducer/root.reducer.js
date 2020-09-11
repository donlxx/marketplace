import {combineReducers} from "redux";
import {filterReducer} from "./filter.reducer";
import {productReducer} from "./product.reducer";
import {compareReducer} from "./compare.reducer";
import {authReducer} from "./auth.reducer";

export const rootReducer = combineReducers({
    filter: filterReducer,
    product: productReducer,
    compare: compareReducer,
    auth: authReducer
})
