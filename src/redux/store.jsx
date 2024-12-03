import { configureStore } from "@reduxjs/toolkit";
import { detailsSlice } from "./slices/detailsSlice";

export const store = configureStore({
  reducer: {
    data: detailsSlice.reducer,
  }
});
