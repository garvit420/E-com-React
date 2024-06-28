export function loadProducts() {
    return (dispatch) => {
        fetch("https://run.mocky.io/v3/1c9a787b-3e6b-4fc2-9460-f908e2e3cc29").then(
            (response) => {
              return response.json();
            }
        ).then((res) => {
            console.log(res);
            dispatch({ type: "LOAD_PRODUCTS_DONE", payload: res });
        })
    }
}

export function updateProduct(category_id) {
    return {
        type: "UPDATE_PRODUCT",
        payload: category_id
    }
}

export function ProductsReducer(state = {
    products: []
}, action) { 
    switch (action.type) {
        case "LOAD_PRODUCTS_DONE": {
            return {
                ...state,
                products: action.payload
            }
        }
        case "UPDATE_PRODUCT": {
            return {
                ...state,
                products: state.products.filter((product) => product.category === action.payload)
            }
        }
        default:
            return state;
    }
}

export default ProductsReducer;
