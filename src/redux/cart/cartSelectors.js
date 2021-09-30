import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.isHidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => Object.keys(cartItems).length
);

export const selectCartTotalValue = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulatedValue, item) => {
      return accumulatedValue + item.price * item.quantity;
    }, 0)
);
