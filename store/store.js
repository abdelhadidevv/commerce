import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import authReducer from "./features/auth/authSlice";
import productsReducer from "./features/products/productsSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    user: userReducer,
  },
});

const makeStore = () => {
  return store;
};

export const wrapper = createWrapper(makeStore, { devTools: true });
