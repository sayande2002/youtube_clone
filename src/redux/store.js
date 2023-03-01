import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./popularSlice";
import categoryReducer from "./categorySlice";

export const store = configureStore({
  reducer: {
    homeVideos: homeReducer,
    categoryVideos: categoryReducer,
  },
});
