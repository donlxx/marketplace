import axios from 'axios';
import {appConstants} from "../constant";
import {useSelector} from "react-redux";

const DATE_JSON_URL = 'https://jsonmock.hackerrank.com/datetime';


export const getProducts = () => {

    const token=localStorage.getItem('token');
    // const token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0dHR0dHQiLCJleHAiOjE1OTk3OTgxMjMsImlhdCI6MTU5OTc4MDEyM30.Wav5jyMYji-zKyQp2kYJh1VE9xp45eBiQQjFdYtIAY5p-UmV25-QgMiEy_AGaMrm3ruwvvBD4RDFJCdjZuFD5g';
    const headers = {'Authorization':'Bearer '+token};
    const getProductsPromise = axios.get(`http://localhost:8080/product`,
        {headers}
        // { withCredentials:true}
    );

    return {
        type: appConstants.Get_Product,
        payload: getProductsPromise
    };
};

export const getProductById = (id) => {
    const getProductByIdPromise = axios.get(`http://localhost:8080/product/${id}`);
    return {
        type: appConstants.Get_ProductById,
        payload: getProductByIdPromise
    }
}


export const getSearchResult = (filter, products) => {

    const newProducts = products.filter(e => {

        //e.pressure > filter.pressure[0] && e.pressure < filter.pressure[0] &&
        return e.hp > filter.hp[0] && e.hp < filter.hp[1]
        // e.heatingSurface > filter.heatingSurface[0] && e.heatingSurface < filter.heatingSurface[1] &&
        // e.length > filter.length[0] && e.length < filter.length[1] &&
        // e.hight > filter.hight[0] && e.hight < filter.hight[1]
    });

    return {
        type: appConstants.searchButton,
        payload: newProducts
    };
}
export const clearSearch =()=>{
    return {
        type: appConstants.searchClearButton,
        payload: null
    }
}

