import {
  ADD_ITEM_TO_SHOPPINGCART,
  REMOVE_ITEM_FROM_SHOPPINGCART,
  TOGGLE_CART,
} from "./shoppingCartTypes";

const initialState = {
  id: 0,
  items: [],
  quantity: 0,
  price: 0,
  isCartOpen: false,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_SHOPPINGCART:
      return {
        ...state,
        items: [...state.items, action.payload.item],
        quantity: action.payload.quantity,
      };
    case REMOVE_ITEM_FROM_SHOPPINGCART:
      return {};
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
