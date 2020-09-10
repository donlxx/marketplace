import {appConstants} from "../constant";

export const addCompareProduct=(p)=>{
    return {
        type: appConstants.addCompare,
        payload: p
    }
}
export const removeCompareProductById=(id)=>{
    return{
        type:appConstants.clearCompareById,
        payload: id
    }
}
export const removeComparProduct=()=>{
    return {
        type:appConstants.clearCompare,
        payload: null
    }
}
