import {
  ADD_ITEM_TO_SHOPPINGCART_FAILURE,
  ADD_ITEM_TO_SHOPPINGCART_PENDING,
  ADD_ITEM_TO_SHOPPINGCART_SUCCESS,
  GET_SHOPPINGCART_FAILURE,
  GET_SHOPPINGCART_PENDING,
  GET_SHOPPINGCART_SUCCESS,
  TOGGLE_CART,
} from "./shoppingCartTypes";
import agent from "../../api/agent";

export const getShoppingCartPending = () => {
  return {
    type: GET_SHOPPINGCART_PENDING,
  };
};

export const getShoppingCartSuccess = (payload) => {
  return {
    type: GET_SHOPPINGCART_SUCCESS,
    payload: payload,
  };
};

export const getShoppingCartFailure = (errorMsg) => {
  return {
    type: GET_SHOPPINGCART_FAILURE,
    payload: errorMsg,
  };
};

export const addItemToShoppingCartPending = () => {
  return {
    type: ADD_ITEM_TO_SHOPPINGCART_PENDING,
  };
};

export const addItemToShoppingCartSuccess = (payload) => {
  return {
    type: ADD_ITEM_TO_SHOPPINGCART_SUCCESS,
    payload: payload,
  };
};

export const addItemToShoppingCartFailure = (errorMsg) => {
  return {
    type: ADD_ITEM_TO_SHOPPINGCART_FAILURE,
    payload: errorMsg,
  };
};

export const toggleShoppingCart = () => {
  return {
    type: TOGGLE_CART,
  };
};

export const getShoppingCart = () => {
  return async (dispatch) => {
    dispatch(getShoppingCartPending());
    try {
      const response = await agent.Basket.getBasket();
      dispatch(getShoppingCartSuccess(response));
    } catch (error) {
      dispatch(error.message);
    }
  };
};

export const addShoppingCartItem = (productId, quantity) => {
  return async (dispatch) => {
    dispatch(addItemToShoppingCartPending());
    try {
      const response = await agent.Basket.addItemToBasket(productId, quantity);
      dispatch(addItemToShoppingCartSuccess(response));
    } catch (error) {
      console.log("something went south in addShoppingCarItem action");
      dispatch(addItemToShoppingCartFailure(error.message));
    }
  };
};
