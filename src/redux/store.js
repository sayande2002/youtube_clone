import { configureStore } from "@reduxjs/toolkit";
import homeVideosReducer from "./videoSlice";
import categoryvideo from "./getVideosByCategory";

export const store = configureStore({
  reducer: {
    homeVideos: homeVideosReducer,
    categoryvideo,
  },
});
