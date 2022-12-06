import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import shoppingCartReducer from "./shoppingcart/shoppingCartReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: shoppingCartReducer,
  products: productReducer,
});

export default rootReducer;
