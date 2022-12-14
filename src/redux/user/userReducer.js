import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  token: "",
  username: "",
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.accessToken,
        username: action.payload.username,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
