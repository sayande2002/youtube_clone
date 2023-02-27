import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import request from "../api";
const initialState = {
  videos: [],
  isLoading: false,
  nextPageToken: null,
  activeCategory: "All",
};
export const fetchPopularVideos = createAsyncThunk(
  "homeVideos/fetchVideo",
  async (dispatch) => {
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
      return data.items;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const homevideo = createSlice({
  name: "videos",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPopularVideos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPopularVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchPopularVideos.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default homevideo.reducer;
// extraReducers: {
//   [fetchPopularVideos.pending]: (state, action) => {
//     state.isLoading = true;
//   },
//   [fetchPopularVideos.fulfilled]: (state, action) => {
//     state.isLoading = false;
//   },
//   [fetchPopularVideos.rejected]: (state, action) => {},
// },
