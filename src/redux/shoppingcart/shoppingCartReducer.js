import {
  ADD_ITEM_TO_SHOPPINGCART_FAILURE,
  ADD_ITEM_TO_SHOPPINGCART_PENDING,
  ADD_ITEM_TO_SHOPPINGCART_SUCCESS,
  CLEAR_SHOPPINGCART_FAILURE,
  CLEAR_SHOPPINGCART_ITEM_FAILURE,
  CLEAR_SHOPPINGCART_ITEM_PENDING,
  CLEAR_SHOPPINGCART_ITEM_SUCCESS,
  CLEAR_SHOPPINGCART_PENDING,
  CLEAR_SHOPPINGCART_SUCCESS,
  GET_SHOPPINGCART_FAILURE,
  GET_SHOPPINGCART_PENDING,
  GET_SHOPPINGCART_SUCCESS,
  REMOVE_ITEM_FROM_SHOPPINGCART_FAILURE,
  REMOVE_ITEM_FROM_SHOPPINGCART_PENDING,
  REMOVE_ITEM_FROM_SHOPPINGCART_SUCCESS,
  TOGGLE_CART,
} from "./shoppingCartTypes";

const initialState = {
  id: 0,
  items: [],
  quantity: 0,
  loading: false,
  isCartOpen: false,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOPPINGCART_PENDING:
      return {
        ...state,
        loading: true,
      };

    case GET_SHOPPINGCART_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        loading: false,
        items: action.payload.basketItems,
        quantity: action.payload.basketItems.length,
      };

    case GET_SHOPPINGCART_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case ADD_ITEM_TO_SHOPPINGCART_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_ITEM_TO_SHOPPINGCART_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        loading: false,
        items:
          state.items.length === 0
            ? action.payload.basketItems
            : [...action.payload.basketItems],
      };
    case ADD_ITEM_TO_SHOPPINGCART_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_ITEM_FROM_SHOPPINGCART_PENDING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_ITEM_FROM_SHOPPINGCART_SUCCESS:
      return {
        ...state,
        loading: false,
        items: [...action.payload.basketItems],
      };
    case REMOVE_ITEM_FROM_SHOPPINGCART_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case CLEAR_SHOPPINGCART_PENDING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_SHOPPINGCART_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.basketItems,
      };
    case CLEAR_SHOPPINGCART_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case CLEAR_SHOPPINGCART_ITEM_PENDING:
      return {
        ...state,
        loading: true,
      };

    case CLEAR_SHOPPINGCART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case CLEAR_SHOPPINGCART_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
