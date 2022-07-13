import { configureStore } from "@reduxjs/toolkit";
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
export default store;
