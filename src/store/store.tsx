import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../auth/auth-reducer";
import cartSlice from "../cart/cart-reducer";

const store = configureStore({
  reducer: { auth: authSlice.reducer, cart: cartSlice.reducer },
});

export default store;
