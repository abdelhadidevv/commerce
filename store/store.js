import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import authReducer from "./features/auth/authSlice";
import productsReducer from "./features/products/productsSlice";
import userReducer from "./features/user/userSlice";

const combinedReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  user: userReducer,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,// use previous state
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const store = configureStore({
  reducer: masterReducer,
});

const makeStore = () => {
  return store;
};

export const wrapper = createWrapper(makeStore, { devTools: true });
