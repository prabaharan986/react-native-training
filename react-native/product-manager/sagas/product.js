import {
    put,
    takeLatest
} from "redux-saga/effects";
import * as actionCreators from "../actionCreators/product"
import {
    GET_PRODUCTS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCT,
    SEARCH_PRODUCTS
} from "../actionTypes/product";
import config from '../config';

let URI = config.baseUrl;

function* getProducts(action) {
    try {
        let products = yield fetch(`${URI}/products?_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

function* getProduct(action) {
    try {
        let product = yield fetch(`${URI}/products/${action.id}`).then(r => r.json());
        yield put(actionCreators.getProductSuccess(product))
    } catch (error) {
        yield put(actionCreators.getProductFailure(error))
    }
}

function* addProduct(action) {
    try {
        let product = yield fetch(`${URI}/products`, {
            body: JSON.stringify(action.product),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        }).then(r => r.json());
        
        yield put(actionCreators.addProductSuccess(product))
    } catch (error) {
        yield put(actionCreators.addProductFailure(error))
    }
}

function* deleteProduct(action) {
    try {
        console.log(action);
        let product = yield fetch(`${URI}/products/${action.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        }).then(r => r.json());
        
        yield put(actionCreators.deleteProductSuccess())
    } catch (error) {
        yield put(actionCreators.deleteProductFailure(error))
    }
}


function* searchProducts(action) {
    try {
        let products = yield fetch(`${URI}/products?q=${action.searchKey}&_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.searchProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.searchProductsFailure(error))
    }
}

export function* productWatchers() {
    yield [
        takeLatest(GET_PRODUCTS, getProducts),
        takeLatest(GET_PRODUCT, getProduct),
        takeLatest(ADD_PRODUCT, addProduct),
        takeLatest(DELETE_PRODUCT, deleteProduct),
        takeLatest(SEARCH_PRODUCTS, searchProducts)
    ];
}


