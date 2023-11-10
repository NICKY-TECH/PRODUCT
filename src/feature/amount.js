import { createSlice } from "@reduxjs/toolkit";

export const amountSlice = createSlice({
  name: "total",
  initialState: { value: 0 },
  reducers: {
    amountState: (state,action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default amountSlice.reducer;
export const { amountState} = amountSlice.actions;
