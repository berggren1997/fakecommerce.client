import {
  ADD_ITEM_TO_SHOPPINGCART,
  ADD_ITEM_TO_SHOPPINGCART_FAILURE,
  ADD_ITEM_TO_SHOPPINGCART_PENDING,
  ADD_ITEM_TO_SHOPPINGCART_SUCCESS,
  REMOVE_ITEM_FROM_SHOPPINGCART,
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
            : [...state.items, ...action.payload.basketItems],
      };
    case ADD_ITEM_TO_SHOPPINGCART_FAILURE:
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
