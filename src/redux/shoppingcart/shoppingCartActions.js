import {
  ADD_ITEM_TO_SHOPPINGCART_FAILURE,
  ADD_ITEM_TO_SHOPPINGCART_PENDING,
  ADD_ITEM_TO_SHOPPINGCART_SUCCESS,
  CLEAR_SHOPPINGCART_PENDING,
  CLEAR_SHOPPINGCART_SUCCESS,
  CLEAR_SHOPPINGCART_FAILURE,
  GET_SHOPPINGCART_FAILURE,
  GET_SHOPPINGCART_PENDING,
  GET_SHOPPINGCART_SUCCESS,
  REMOVE_ITEM_FROM_SHOPPINGCART_FAILURE,
  REMOVE_ITEM_FROM_SHOPPINGCART_PENDING,
  REMOVE_ITEM_FROM_SHOPPINGCART_SUCCESS,
  TOGGLE_CART,
} from "./shoppingCartTypes";
import agent from "../../api/agent";
import { toast } from "react-toastify";

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

export const removeItemFromShoppingCartPending = () => {
  return {
    type: REMOVE_ITEM_FROM_SHOPPINGCART_PENDING,
  };
};

export const removeItemFromShoppingCartSuccess = (payload) => {
  return {
    type: REMOVE_ITEM_FROM_SHOPPINGCART_SUCCESS,
    payload: payload,
  };
};

export const removeItemFromShoppingCartFailure = (errorMsg) => {
  return {
    type: REMOVE_ITEM_FROM_SHOPPINGCART_FAILURE,
    payload: errorMsg,
  };
};

export const clearShoppingCartPending = () => {
  return {
    type: CLEAR_SHOPPINGCART_PENDING,
  };
};

export const clearShoppingCartSuccess = (payload) => {
  return {
    type: CLEAR_SHOPPINGCART_SUCCESS,
    payload: payload,
  };
};

export const clearShoppingCartFailure = (errorMsg) => {
  return {
    type: CLEAR_SHOPPINGCART_FAILURE,
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
      toast.success("Successfully added item to shopping cart.", {
        theme: "dark",
      });
    } catch (error) {
      console.log("something went south in addShoppingCarItem action");
      dispatch(addItemToShoppingCartFailure(error.message));
    }
  };
};

export const removeShoppingCartItem = (productId, quantity) => {
  return async (dispatch) => {
    dispatch(removeItemFromShoppingCartPending());
    try {
      const response = await agent.Basket.removeItemFromBasket(
        productId,
        quantity
      );
      dispatch(removeItemFromShoppingCartSuccess(response));
    } catch (error) {
      dispatch(removeItemFromShoppingCartFailure(error.message));
    }
  };
};

export const clearShoppingCart = () => {
  return async (dispatch) => {
    dispatch(clearShoppingCartPending());
    try {
      const response = await agent.Basket.clearCart();
      dispatch(clearShoppingCartSuccess(response));
    } catch (error) {
      dispatch(clearShoppingCartFailure(error.message));
    }
  };
};
