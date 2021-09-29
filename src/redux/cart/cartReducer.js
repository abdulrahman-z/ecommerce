import actionTypes from "./actionTypes";
import { addNewItemToCart } from "./cartUtils";

const initialState = {
  isHidden: true,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    case actionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addNewItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
