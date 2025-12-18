import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {}, //for auto-completion
  updateItemQuantity: () => {} //for auto-completion
});