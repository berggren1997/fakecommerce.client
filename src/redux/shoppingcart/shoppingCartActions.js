import {
  ADD_ITEM_TO_SHOPPINGCART,
  REMOVE_ITEM_FROM_SHOPPINGCART,
  TOGGLE_CART,
} from "./shoppingCartTypes";

export const addShoppingCartItem = (item, quantity = 1) => {
  return {
    type: ADD_ITEM_TO_SHOPPINGCART,
    payload: {
      item,
      quantity,
    },
  };
};

export const toggleShoppingCart = () => {
  return {
    type: TOGGLE_CART,
  };
};

export const removeShoppingCartItem = (item, quantity = 1) => {
  return {
    type: REMOVE_ITEM_FROM_SHOPPINGCART,
    payload: {
      item,
      quantity,
    },
  };
};

export const addItem = () => {
  return (dispatch) => {
    dispatch(addShoppingCartItem());
  };
};

export const removeItem = () => {
  return (dispatch) => {
    dispatch(removeShoppingCartItem());
  };
};
