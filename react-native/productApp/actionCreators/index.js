import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE
} from '../actionTypes';

export const getProducts = ()=> { type: GET_PRODUCTS}
export const getProductsSuccess = () => {type: GET_PRODUCTS_SUCCESS, products}
export const getProductsFailure = () => {type: GET_PRODUCTS_FAILURE, error}