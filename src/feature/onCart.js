import { createSlice } from "@reduxjs/toolkit";

export const onCartSlice = createSlice({
  name: "onCart",
  initialState: { value: false },
  reducers: {
   onCartState: (state,action) => {
    if(action.payload===false){
return {
    ...state,
    value:action.payload
}
    }
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default onCartSlice.reducer;
export const { onCartState } = onCartSlice.actions;
