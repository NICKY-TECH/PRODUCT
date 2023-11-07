import { createSlice } from "@reduxjs/toolkit";

export const overLaySlice = createSlice({
  name: "overlayeffect",
  initialState: { value: false },
  reducers: {
    changeOverLayState: (state) => {
     return {
        ...state,
        value: !state.value
     }
    },
  },
});

export default overLaySlice.reducer;
export const { changeOverLayState } = overLaySlice.actions;
