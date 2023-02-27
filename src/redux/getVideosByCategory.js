import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../api";
const initialState = {
  videos: [],
  isLoading: false,
  nextPageToken: null,
  activeCategory: "All",
};
export const getVideosByCategory = createAsyncThunk(
  "categoryvideo/fetchVideo",
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
        category: keyword,
      };
    } catch (error) {
      console.log(error.message);
    }
  }
);

const categoryvideo = createSlice({
  name: "categoty",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(getVideosByCategory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getVideosByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload.videos;
        state.nextPageToken = action.payload.nextPageToken;
        state.category = action.payload.category;
      })
      .addCase(getVideosByCategory.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default categoryvideo.reducer;
