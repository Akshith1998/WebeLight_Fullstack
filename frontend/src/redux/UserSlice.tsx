import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = {
  products: Array<{
    _id: string;
    name: string;
    price: string;
    available: Number;
    category: string;
    image: string;
    vendor: string;
    quantity?: Number;
  }>;
};

const initialState: InitialState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
