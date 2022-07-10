import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "./productsService";

const initialState = {
  offers: [],
  featuredCategories: [],
  featuredProducts: [],
  trendingProducts: [],
  allCategory: [],
  productById: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
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
  extraReducers: (builder) => {
    builder
      .addCase(getOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.offers = action.payload;
      })
      .addCase(getOffers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.offers = null;
      });

    builder
      .addCase(getFeaturedCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeaturedCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.featuredCategories = action.payload;
      })
      .addCase(getFeaturedCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.featuredCategories = null;
      });

    builder
      .addCase(getAllCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allCategory = action.payload;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.allCategory = null;
      });

    builder
      .addCase(getFeaturedProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeaturedProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.featuredProducts = action.payload;
      })
      .addCase(getFeaturedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.featuredProducts = null;
      });

    builder
      .addCase(getTrendingProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrendingProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trendingProducts = action.payload;
      })
      .addCase(getTrendingProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.trendingProducts = null;
      });

    builder
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productById = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.productById = null;
      });
  },
});

export const { reset } = productsSlice.actions;

export default productsSlice.reducer;