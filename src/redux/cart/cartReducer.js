import actionTypes from "./actionTypes";

const initialState = {
  isHidden: true,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
