import agent from "../../api/agent";
import { getShoppingCartSuccess } from "../shoppingcart/shoppingCartActions";
import {
  FETCH_CURRENT_USER_FAILURE,
  FETCH_CURRENT_USER_PENDING,
  FETCH_CURRENT_USER_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./userTypes";

export const userLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

// Will get a token (payload.accessToken) and maybe username (payload.username)
export const userLoginSuccess = (payload) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: payload,
    // payload: {
    //   token: payload.accessToken,
    //   username: payload.username,
    // },
  };
};

export const userLoginFailure = (payload) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: payload,
  };
};

export const fetchCurrentUserPending = () => {
  return {
    type: FETCH_CURRENT_USER_PENDING,
  };
};

export const fetchCurrentUserSuccess = (payload) => {
  return {
    type: FETCH_CURRENT_USER_SUCCESS,
    payload: payload,
  };
};

export const fetchCurrentUserFailure = (payload) => {
  return {
    type: FETCH_CURRENT_USER_FAILURE,
    payload: payload,
  };
};

export const userLogin = (fieldvalues) => {
  return async (dispatch) => {
    dispatch(userLoginRequest());
    try {
      const response = await agent.Account.login(fieldvalues);
      // const { basket } = response;
      dispatch(userLoginSuccess(response));
      // dispatch(getShoppingCartSuccess(basket));
    } catch (error) {
      dispatch(userLoginFailure(error.message));
    }
  };
};

export const fetchCurrentUser = () => {
  return async (dispatch) => {
    dispatch(fetchCurrentUserPending());
    try {
      const values = JSON.parse(localStorage.getItem("user"));
      dispatch(userLoginSuccess(values));
      const authResponse = await agent.Account.getCurrentUser();
    } catch (error) {
      if (error.response.status === 401) {
        console.log("user not authorized");
      }
    }
  };
};
