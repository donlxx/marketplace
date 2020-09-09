import {combineReducers} from "redux";
import {filterReducer} from "./filter.reducer";
import {productReducer} from "./product.reducer";

export const rootReducer = combineReducers({
    filter: filterReducer,
    product: productReducer
})
