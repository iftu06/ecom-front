import { createSlice } from "@reduxjs/toolkit";
import CartItem from "./cart_item";

//import CartItem from ""

interface CartInitial {
  totQauntity: number;
  items: CartItem[];
  totalPrice: number;
  isCartVisible: boolean;
}
const initialState: CartInitial = {
  totQauntity: 0,
  items: [],
  totalPrice: 0,
  isCartVisible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem: CartItem = action.payload;
      const existingItem: CartItem = state.items.find(
        (item: CartItem) => item.id == newItem.id
      )!;
      if (!existingItem) {
        state.items.push(existingItem);
      } else {
        existingItem.quantity++;
      }
      state.totQauntity--;
      state.totalPrice = state.totalPrice - existingItem.price;
    },
    removeItemFromCart(state, action) {
      const removedItemId = action.payload;
      const existingItem: CartItem = state.items.find(
        (item: CartItem) => item.id == removedItemId
      )!;
      const itemIndx = state.items.indexOf(existingItem);
      if (existingItem.quantity == 1) {
        state.items = state.items.filter((item) => item.id != removedItemId);
      } else {
        existingItem.quantity--;
        state.items[itemIndx] = existingItem;
      }
      state.totQauntity--;
      //state.totalPrice = state.totalPrice - existingItem.price;
    },
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
