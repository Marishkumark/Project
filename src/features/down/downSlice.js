import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  downData: [],
};

const downSlice = createSlice({
  name: "down",
  initialState,
  reducers: {
    downl: (state, action) => {
      const product = action.payload;
      state.downData = [...state.downData, product];
    },
  },
});

export default downSlice.reducer;

export const { downl } = downSlice.actions;
