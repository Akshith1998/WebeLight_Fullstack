import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./UserSlice";

export default configureStore({
  reducer: {
    product: ProductSlice.reducer,
  },
});
