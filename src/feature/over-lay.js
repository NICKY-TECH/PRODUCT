import { createSlice } from "@reduxjs/toolkit";

export const overLaySlice = createSlice({
  name: "overlayeffect",
  initialState: { value: false },
  reducers: {
    changeOverLayState: (state,action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default overLaySlice.reducer;
export const { changeOverLayState } = overLaySlice.actions;
