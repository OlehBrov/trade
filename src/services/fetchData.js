import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://api2.comtrading.ua";
export const fetchCategories = createAsyncThunk(
  "categories/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/categories");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSlides = createAsyncThunk("slides/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/slider");
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})