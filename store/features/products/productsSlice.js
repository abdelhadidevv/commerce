import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "./productsService";

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
    rehydrate: (state, action) => {
      state.offers = action.payload.offers;
      state.featuredCategories = action.payload.featuredCategories;
      state.featuredProducts = action.payload.featuredProducts;
      state.trendingProducts = action.payload.trendingProducts;
      state.allCategory = action.payload.allCategory;
      state.productsByCategory = action.payload.productsByCategory;
      state.productById = action.payload.productById;
      state.isSuccess = action.payload.isSuccess;
      state.isLoading = action.payload.isLoading;
      state.isError = action.payload.isError;
      state.message = action.payload.message;
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
      .addCase(getProductsByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productsByCategory = action.payload;
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.productsByCategory = null;
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

export const { rehydrate, reset } = productsSlice.actions;

export default productsSlice.reducer;
