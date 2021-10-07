import SHOP_DATA from "./data";

const initialState = {
  collection: SHOP_DATA,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
