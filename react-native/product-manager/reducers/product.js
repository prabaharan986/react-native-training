import {
    GET_PRODUCTS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    SEARCH_PRODUCTS,
    SEARCH_PRODUCTS_SUCCESS,
    SEARCH_PRODUCTS_FAILURE,
} from "../actionTypes/product";

const inititalState = {
    products: [],
    product: {},
    searchProducts: [],
    isLoading: false,
    isRefreshing: false,
    page: 1,
    limit: 8,
    isSuccess: false,
    searchKey: ''
};

export default (prevState = inititalState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...prevState,
                isLoading: prevState.products.length > 0 ? false:true,
                page: action.page
            }
        case GET_PRODUCTS_SUCCESS:
            return { ...prevState,
                isLoading: false,
                products: prevState.products.concat(action.products)
            }
        case GET_PRODUCT:
            return { ...prevState,
                isLoading: true
            }
        case GET_PRODUCT_SUCCESS: {
            return { ...prevState,
                isLoading: false,
                product: action.product
            }
        }
        case ADD_PRODUCT:
            return { ...prevState,
                isLoading: true,
                product: action.product,
                isSuccess: false,
            }
        case ADD_PRODUCT_SUCCESS:
            return { ...prevState,
                isLoading: false,
                product: action.product,
                isSuccess: true,
            }
        case SEARCH_PRODUCTS:
            return { ...prevState,
                isLoading: true,
                page: action.page,
                searchKey: action.searchKey
            }
        case SEARCH_PRODUCTS_SUCCESS: {
            return { ...prevState,
                isLoading: false,
                searchProducts: prevState.searchProducts.concat(action.products)
            }
        }
        case GET_PRODUCTS_FAILURE:
        case GET_PRODUCT_FAILURE:
        case ADD_PRODUCT_FAILURE:
        case SEARCH_PRODUCTS_FAILURE:
            return { ...prevState,
                isLoading: false,
                error: action.error,
                isSuccess: false
            }
        default:
            return prevState;

    }
}