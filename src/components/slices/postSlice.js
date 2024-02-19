import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  }
);

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectPosts = state => state.posts.posts;
export const selectIsLoading = state => state.posts.isLoading;
export const selectError = state => state.posts.error;

export default postSlice.reducer;
