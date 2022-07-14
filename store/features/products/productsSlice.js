import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "./productsService";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  offers: [],
  featuredCategories: [],
  featuredProducts: [],
  trendingProducts: [],
  allCategory: [],
  productsByCategory: [],
  productById: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
};

export const getOffers = createAsyncThunk(
  "products/offers",
  async (thunkAPI) => {
    try {
      return await productsService.offers();
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

export const getFeaturedCategories = createAsyncThunk(
  "products/featured-categories",
  async (category, thunkAPI) => {
    try {
      return await productsService.featuredCategories(category);
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

export const getAllCategory = createAsyncThunk(
  "products/category/all",
  async (thunkAPI) => {
    try {
      return await productsService.allCategory();
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

export const getFeaturedProducts = createAsyncThunk(
  "products/featured-products",
  async (thunkAPI) => {
    try {
      return await productsService.featuredProducts();
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

export const getTrendingProducts = createAsyncThunk(
  "products/trending-products",
  async (thunkAPI) => {
    try {
      return await productsService.trendingProducts();
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

export const getProductById = createAsyncThunk(
  "products/by-id",
  async (productId, thunkAPI) => {
    try {
      return await productsService.productById(productId);
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

export const getProductsByCategory = createAsyncThunk(
  "products/by-category",
  async (category, thunkAPI) => {
    try {
      return await productsService.productsByCategory(category);
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

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.products,
      };
    },

    [getOffers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getOffers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.offers = action.payload;
    },
    [getOffers.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.offers = null;
    },

    [getFeaturedCategories.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getFeaturedCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.featuredCategories = action.payload;
    },
    [getFeaturedCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.featuredCategories = null;
    },

    [getAllCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.allCategory = action.payload;
    },
    [getAllCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.allCategory = null;
    },

    [getFeaturedProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getFeaturedProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.featuredProducts = action.payload;
    },
    [getFeaturedProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.featuredProducts = null;
    },

    [getTrendingProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTrendingProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.trendingProducts = action.payload;
    },
    [getTrendingProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.trendingProducts = null;
    },

    [getProductsByCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProductsByCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.productsByCategory = action.payload;
    },
    [getProductsByCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.productsByCategory = null;
    },

    [getProductById.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProductById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.productById = action.payload;
    },
    [getProductById.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.productById = null;
    },
  },
});

export const { reset } = productsSlice.actions;

export default productsSlice.reducer;
