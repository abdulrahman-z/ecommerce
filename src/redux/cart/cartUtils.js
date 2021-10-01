export const addNewItemToCart = (cartItems, newCartItem) => {
  const existingItem = cartItems.find((item) => item.id === newCartItem.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === newCartItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...newCartItem, quantity: 1 }];
};

export const removeDecreaseItem = (cartItems, itemToremove) => {
  const itemExists = cartItems.find((item) => {
    return item.id === itemToremove.id;
  });

  if (itemExists.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToremove.id);
  }
  return cartItems.map((item) =>
    item.id === itemToremove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
