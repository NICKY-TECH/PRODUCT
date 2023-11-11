import { createSlice } from "@reduxjs/toolkit";

export const activeSlice = createSlice({
  name: "valid",
  initialState: { value: false },
  reducers: {
    activeState: (state) => {
      return {
        ...state,
        value: !state.value,
      };
    },
  },
});

export default activeSlice.reducer;
export const {activeState } = activeSlice.actions;
