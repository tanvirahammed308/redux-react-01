import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
      // alternative

      //  return [...state, action.payload];
    },

    remove(state, action) {
      // Filter out the item with the provided id
      return state.filter((item) => item.id !== action.payload);
    //   or 
    // state = state.filter((item) => item.id !== action.payload);
    
    },
  },
});
export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer; 