import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../api";
const initialState = {
  videos: [],
  isLoading: false,
  nextPageToken: null,
  activeCategory: "All",
};
export const getCategoryVideos = createAsyncThunk(
  "categoryVideos/fetchVideo",
  async (keyword, { getState }) => {
    try {
      const { data } = await request("/search", {
        params: {
          part: "snippet",
          q: keyword,
          maxResults: 20,
          pageToken: getState().homeVideos.nextPageToken,
          type: "video",
        },
      });
      return {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        // category: keyword,
      };
    } catch (error) {
      console.log(error.message);
    }
  }
);

const categorySlice = createSlice({
  name: "categoryVideos",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(getCategoryVideos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCategoryVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload.videos;
        state.nextPageToken = action.payload.nextPageToken;
        // state.category = action.payload.category;
      })
      .addCase(getCategoryVideos.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default categorySlice.reducer;
