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
        state.items.push(newItem);
      } else {
        existingItem.quantity++;
      }
      state.totQauntity++;
      state.totalPrice = state.totalPrice + newItem.price;
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
      }
      state.totQauntity--;
      state.totalPrice = state.totalPrice - existingItem.price;
    },
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    increaseCartQuantByOne(state, action) {
      const itemdIdToIncrease = action.payload;
      const itemToIncrease: CartItem = state.items.find(
        (item) => item.id === itemdIdToIncrease
      )!;
      itemToIncrease.quantity++;
      state.totQauntity++;
      state.totalPrice = state.totalPrice + itemToIncrease.price;
    },
    decreaseCartQuantByOne(state, action) {
      const itemdIdToDecrease = action.payload;
      console.log("Item To Decrese  1111" + itemdIdToDecrease);
      const itemToDecrease: CartItem = state.items.find(
        (item) => item.id === itemdIdToDecrease
      )!;
      if (itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
      } else {
        state.items = state.items.filter(
          (item) => item.id != itemdIdToDecrease
        );
      }
      state.totQauntity--;
      state.totalPrice = state.totalPrice - itemToDecrease.price;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
