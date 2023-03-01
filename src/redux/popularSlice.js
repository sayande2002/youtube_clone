import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../api";
const initialState = {
  videos: [],
  isLoading: false,
  nextPageToken: null,
  activeCategory: "All",
};
export const getPopularVideos = createAsyncThunk(
  "homeVideos/fetchVideo",
  async () => {
    try {
      const { data } = await request("/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 20,
          pageToken: "",
        },
      });
      return {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      };
    } catch (error) {
      console.log(error.message);
    }
  }
);

const homeVideoSlice = createSlice({
  name: "homeVideos",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(getPopularVideos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPopularVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload.videos;
        state.nextPageToken = action.payload.nextPageToken;
        state.activeCategory = action.payload.category;
      })
      .addCase(getPopularVideos.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default homeVideoSlice.reducer;
