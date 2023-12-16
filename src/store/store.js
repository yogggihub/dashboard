import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "./userDetailsSlice";
const store = configureStore({
  reducer: {
    users: userDetailsSlice,
  },
});
export default store;
