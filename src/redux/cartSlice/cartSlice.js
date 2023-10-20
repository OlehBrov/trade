import { createSlice } from "@reduxjs/toolkit";
const cartInitialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    removeFromCart(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;