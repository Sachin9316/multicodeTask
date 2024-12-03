import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("data/fetchPosts", async () => {
  const res = await axios.get(`https://fakestoreapi.com/products/`);
  return res.data;
});

export const fetchProductById = createAsyncThunk("data/fetchProductById", async (id) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
});

const initialState = {
  posts: [],
  cart: [],
  loading: true,
};

export const detailsSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const data = state.posts.find((item) => item.id === actions.payload);
      state.cart = [data];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, actions) => {
        state.loading = false;
        state.posts = actions.payload;
      })
      .addCase(fetchProductById.fulfilled, (state, actions) => {
        state.loading = false;
        const existingProduct = state.cart.find(item => item.id === actions.payload.id);
        if (!existingProduct) {
          state.cart.push(actions.payload);
        }
      });
  },
});

export const { addToCart } = detailsSlice.actions;
export default detailsSlice.reducer;
