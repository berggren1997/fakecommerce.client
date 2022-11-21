import {
  ADD_ITEM_TO_SHOPPINGCART,
  REMOVE_ITEM_FROM_SHOPPINGCART,
} from "./shoppingCartTypes";

const initialState = {
  items: [],
  quantity: 0,
  price: 0,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_SHOPPINGCART:
      return {
        ...state,
        items: action.payload.item,
        quantity: action.payload.quantity,
      };
    case REMOVE_ITEM_FROM_SHOPPINGCART:
      return {};

    default:
      return state;
  }
};

export default shoppingCartReducer;
