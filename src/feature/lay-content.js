import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: { value: false },
  reducers: {
   layContentState: (state,action) => {
  
    return {
      ...state,
      value: action.payload,
    };
    
     
    },
  },
});

export default contentSlice.reducer;
export const {layContentState } = contentSlice.actions;
