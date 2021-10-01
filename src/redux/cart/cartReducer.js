import actionTypes from "./actionTypes";
import { addNewItemToCart, removeDecreaseItem } from "./cartUtils";

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

    case actionTypes.REMOVE_CARTITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };

    case actionTypes.DECREASE_REMOVE_CARTITEM:
      return {
        ...state,
        cartItems: removeDecreaseItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
