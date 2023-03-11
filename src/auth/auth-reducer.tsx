import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  isSignInModalOpen: false,
  isSignUpModalOpen: false,
  account: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.account = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.account = null;
    },
    showSignInModal(state) {
      state.isSignInModalOpen = true;
    },
    hideSignInModal(state) {
      state.isSignInModalOpen = false;
    },
    showSignUpModal(state) {
      state.isSignUpModalOpen = true;
    },
    hideSignUpModal(state) {
      state.isSignUpModalOpen = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
