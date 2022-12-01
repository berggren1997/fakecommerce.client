import agent from "../../api/agent";
import {
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

export const userLogin = (fieldvalues) => {
  return async (dispatch) => {
    dispatch(userLoginRequest());
    try {
      const response = await agent.Account.login(fieldvalues);
      dispatch(userLoginSuccess(response));
    } catch (error) {
      dispatch(userLoginFailure(error.message));
    }
  };
};
