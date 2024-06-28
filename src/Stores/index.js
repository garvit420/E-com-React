import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import cartReducer from "./Cart";
import { thunk } from "redux-thunk";
import categoriesReducer from "./Categories";
import ProductsReducer from "./Products";

const reducer = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer,
    products: ProductsReducer
})
const store = createStore(reducer, applyMiddleware(thunk));


export default store;
