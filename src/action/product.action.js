import axios from 'axios';
import {appConstants} from "../constant";

const DATE_JSON_URL = 'https://jsonmock.hackerrank.com/datetime';


export const getProducts = () => {

    const token = localStorage.getItem('token');
    // const token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0dHR0dHQiLCJleHAiOjE1OTk3OTgxMjMsImlhdCI6MTU5OTc4MDEyM30.Wav5jyMYji-zKyQp2kYJh1VE9xp45eBiQQjFdYtIAY5p-UmV25-QgMiEy_AGaMrm3ruwvvBD4RDFJCdjZuFD5g';
    const headers = {'Authorization': 'Bearer ' + token,
        'Access-Control-Allow-Origin': '*'};
    const getProductsPromise = axios.get(`${process.env.REACT_APP_API_URL}/product`,
        {headers}

    );

    return {
        type: appConstants.Get_Product,
        payload: getProductsPromise
    };
};

export const getProductById = (id) => {
    const getProductByIdPromise = axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`);
    return {
        type: appConstants.Get_ProductById,
        payload: getProductByIdPromise
    }
}


export const getSearchResult = (filter, products) => {

    const newProducts = products.filter(e => {

        //e.pressure > filter.pressure[0] && e.pressure < filter.pressure[0] &&
        return e.hp >= filter.hp[0] && e.hp <= filter.hp[1] &&
            e.heatingSurface >= filter.heatingSurface[0] && e.heatingSurface <= filter.heatingSurface[1] &&
            e.length >= filter.length[0] && e.length <= filter.length[1] &&
            e.hight >= filter.hight[0] && e.hight <= filter.hight[1] &&
            e.price >= filter.price[0] && e.price <= filter.price[1] &&
            e.year >= filter.year[0] && e.year <= filter.year[1]
    });

    return {
        type: appConstants.searchButton,
        payload: newProducts
    };
}
export const clearSearch = () => {
    return {
        type: appConstants.searchClearButton,
        payload: null
    }
}

