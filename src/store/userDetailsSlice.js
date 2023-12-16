import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
};
const userDetailsSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "Rejected";
      })
      .addCase(deleteUsers.fulfilled, (state, { payload }) => {
        //state.data = payload.filter((ele)=>ele.id !==  )
        console.log("payload", payload);
        state.status = "idle";
      })
      .addDefaultCase((state, action) => {
        state.status = "something went wrong";
      });
  },
});
// return the function
export const {} = userDetailsSlice.actions;
// return the state
export default userDetailsSlice.reducer;
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get("http://localhost:3001/users");
  console.log("API working", response.data);
  return response.data;
});
export const deleteUsers = createAsyncThunk(
  "users/deleteUsers",
  async (userid) => {
    const response = await axios.delete(
      `http://localhost:3001/users/${userid}`
    );
    console.log("response", response);
    return response.data;
  }
);
