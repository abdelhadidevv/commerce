import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
// import sessionStorage from "redux-persist/lib/storage/session";
import authReducer from "./features/auth/authSlice";
import productsReducer from "./features/products/productsSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    user: userReducer,
  },
  devTools: true,
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
