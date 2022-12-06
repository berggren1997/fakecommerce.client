import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
} from "./productTypes";

const initialState = {
  loading: false,
  products: [],
  errorMsg: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
