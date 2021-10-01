import actionTypes from "./actionTypes";

export const toggleCartHidden = () => ({
  type: actionTypes.SET_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: actionTypes.REMOVE_CARTITEM,
  payload: item,
});

export const decreaseRemoveItem = (item) => ({
  type: actionTypes.DECREASE_REMOVE_CARTITEM,
  payload: item,
});
