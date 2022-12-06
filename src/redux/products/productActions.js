import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
} from "./productTypes";
import agent from "../../api/agent";

export const fetchProductsPending = () => {
  return {
    type: FETCH_PRODUCTS_PENDING,
  };
};

export const fetchProductsSuccess = (payload) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: payload,
  };
};

export const fetchProductsFailure = (errMessage) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: errMessage,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsPending());
    try {
      const response = await agent.Products.getProducts();
      dispatch(fetchProductsSuccess(response));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};
