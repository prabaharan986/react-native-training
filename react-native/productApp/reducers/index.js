import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE
} from '../actionTypes';

const initialState = {
    products: [],
    isLoading: false,
    error: ''
}

export default function (prevState = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...prevState, isLoading: true };
        case GET_PRODUCTS_SUCCESS:
            return { ...prevState, isLoading: false, products: action.products };
        case GET_PRODUCTS_FAILURE:
            return { ...prevState, isLoading: false, error: action.error };
        default:
            return prevState;

    }
}