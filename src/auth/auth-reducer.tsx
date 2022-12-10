import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  isSignInModalOpen: false,
  isSignUpModalOpen: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
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
export const authReducer = authSlice.reducer;
