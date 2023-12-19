import axios from "axios";
import agent from "../../api/agent";
import { getShoppingCartSuccess } from "../shoppingcart/shoppingCartActions";
import {
  FETCH_CURRENT_USER_FAILURE,
  FETCH_CURRENT_USER_PENDING,
  FETCH_CURRENT_USER_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  REFRESH_TOKEN_PENDING,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  SIGN_OUT_USER,
} from "./userTypes";

export const userLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

// Will get a token (payload.accessToken) and maybe username (payload.username)
export const userLoginSuccess = (payload) => {
  axios.defaults.headers["authorization"] = `Bearer ${payload.accessToken}`;
  const user = {
    accessToken: payload.accessToken,
    username: payload.username,
  };
  localStorage.setItem("user", JSON.stringify(user));
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

export const refreshTokenPending = () => {
  return {
    type: REFRESH_TOKEN_PENDING,
  };
};

export const refreshTokenSuccess = (payload) => {
  return {
    type: REFRESH_TOKEN_SUCCESS,
    payload: payload,
  };
};

export const refreshTokenFailure = () => {
  return {
    type: REFRESH_TOKEN_FAILURE,
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

// export const refreshToken = () => {
//   return async (dispatch) => {
//     dispatch(refreshTokenPending());
//     try {
//       const response = await agent.Account.refreshAccessToken();
//       dispatch(userLoginSuccess(response));
//     } catch (error) {
//       if (error.response.status === 401) {
//         dispatch(refreshTokenFailure());
//         localStorage.removeItem("user");
//       }
//     }
//   };
// };

export const signOutUser = () => {
  return {
    type: SIGN_OUT_USER,
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
      console.log(error);
      if (error.response.status === 401) {
        console.log("access token expired, refreshing..");
        const values = await agent.Account.refreshAccessToken();
        console.log(values);
        localStorage.setItem("user", JSON.stringify(values));
      }
    }
  };
};
