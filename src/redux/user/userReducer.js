import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./userTypes";

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
        token: action.payload.token,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export default userReducer;
