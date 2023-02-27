import { configureStore } from "@reduxjs/toolkit";
import homeVideosReducer from "./videoSlice";

export const store = configureStore({
  reducer: {
    homeVideos: homeVideosReducer,
  },
});
