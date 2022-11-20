import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./userTypes";

export const userLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

// Will get a token (payload.accessToken) and maybe username (payload.username)
export const userLoginSuccess = (payload) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      token: payload.accessToken,
      username: payload.username,
    },
  };
};

export const userLogin = () => {
  return async (dispatch) => {
    dispatch(userLoginRequest());
    // make api request
  };
};
