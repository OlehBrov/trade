import { createSlice } from "@reduxjs/toolkit";
import { fetchSlides } from "../../services/fetchData";
const sliderInitialState = {
  slides: [],
  isLoading: false,
  error: null,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState: sliderInitialState,
  extraReducers: {
    [fetchSlides.pending](state) {
      state.isLoading = true;
    },
    [fetchSlides.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.slides = action.payload;
    },
    [fetchSlides.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const sliderReducer = sliderSlice.reducer;
