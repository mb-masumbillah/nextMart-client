import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    
}

const initialState : IInitialState = {
    
}


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
