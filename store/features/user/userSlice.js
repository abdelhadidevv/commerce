import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  profile: null,
  userOrders: null,
  userCart: null,
  addToCart: null,
  deleteFromCart: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
};

export const getProfile = createAsyncThunk("user/profile", async (thunkAPI) => {
  try {
    return await userService.profile();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getUserOrders = createAsyncThunk(
  "orders/my-orders",
  async (thunkAPI) => {
    try {
      return await userService.userOrders();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserCart = createAsyncThunk(
  "users/profile/cart",
  async (thunkAPI) => {
    try {
      return await userService.userCart();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "users/profile/cart/add",
  async (productData, thunkAPI) => {
    try {
      return await userService.addToCart(productData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  "users/profile/cart/delete",
  async (productId, thunkAPI) => {
    try {
      return await userService.deleteFromCart(productId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = null;
    },
  },
  extraReducers: {
    [getProfile.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.profile = action.payload;
    },
    [getProfile.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "action.payload";
      state.profile = null;
    },

    [getUserOrders.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUserOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userOrders = action.payload;
    },
    [getUserOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "action.payload";
      state.userOrders = null;
    },

    [getUserCart.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUserCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userCart = action.payload;
    },
    [getUserCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.userCart = null;
    },

    [addToCart.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.addToCart = action.payload;
    },
    [addToCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.addToCart = null;
    },

    [deleteFromCart.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteFromCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.deleteFromCart = action.payload;
    },
    [deleteFromCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.deleteFromCart = null;
    },
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
