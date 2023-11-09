import { createSlice } from "@reduxjs/toolkit";

export const asideSlice = createSlice({
  name: "asideeffect",
  initialState: { value: false },
  reducers: {
   asideState: (state) => {
      return {
        ...state,
        value: !state.value,
      };
    },
  },
});

export default asideSlice.reducer;
export const { asideState } = asideSlice.actions;
