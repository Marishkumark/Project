import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favData: [],
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    add: (state, action) => {
      const product = action.payload;
      state.favData = [...state.favData, product];
    },
  },
});

export default favSlice.reducer;

export const { add } = favSlice.actions;
