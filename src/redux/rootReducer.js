import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingcart/shoppingCartReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: shoppingCartReducer,
});

export default rootReducer;
