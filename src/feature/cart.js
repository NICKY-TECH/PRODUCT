import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "overlayeffect",
  initialState: { value: false },
  reducers: {
  setCart: (state,action) => {
    if(action.payload===false){
      return {
        ...state,
        value:action.payload
      }
    }
     return {
        ...state,
        value: !state.value
     }
    },
  },
});

export default cartSlice.reducer;
export const { setCart } = cartSlice.actions;
