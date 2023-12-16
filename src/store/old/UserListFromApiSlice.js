import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  data: [],
};
const userListFromApiSlice = createSlice({
  name: "userList",
  // initial State
  initialState,
  reducers: {
    // saveUser(state, action) {
    //   //   state.push(action.payload);
    // },
    extraReducer: (builder) => {
      builder.addCase(getUsers.fulfilled, (state, action) => {
        state.data = action.payload;
      });
    },
  },
});
export const {} = userListFromApiSlice.actions;
export default userListFromApiSlice.reducer;
export const getUsers = createAsyncThunk("product/get", async () => {
  await axios
    .get("http://localhost:3001/users")
    .then((rawData) => {
      localStorage.setItem("userData", JSON.stringify(rawData.data));
      console.log(rawData);
      return rawData.data;
    })
    .catch((error) => console.log("Something went wrong", error));
});
