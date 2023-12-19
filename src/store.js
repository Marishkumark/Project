import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./features/fav/favSlice";
import downReducer from "./features/down/downSlice";

export const store = configureStore({
  reducer: {
    fav: favReducer,
    down: downReducer,
  },
});
