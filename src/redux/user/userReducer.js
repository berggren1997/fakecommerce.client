import {
  REFRESH_TOKEN_FAILURE,
  REFRESH_TOKEN_PENDING,
  REFRESH_TOKEN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  token: "",
  username: "",
  basketItems: [],
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
      const { accessToken, username /* basket */ } = action.payload;
      if (accessToken) {
        localStorage.setItem("user", JSON.stringify({ username, accessToken }));
      }
      return {
        ...state,
        loading: false,
        token: accessToken,
        username: username,
        // basketItems: basket.basketItems,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case REFRESH_TOKEN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.accessToken,
        username: action.payload.username,
      };

    case REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
