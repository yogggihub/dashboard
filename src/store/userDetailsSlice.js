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
        state.status = "idle";
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        debugger;
        const index = state.data?.findIndex(
          (user) => user?.id === +payload?.id
        );

        console.log([index]);
        console.log(state.data[index]);
        state.data[index] = {
          ...state.data[index],
          ...payload,
        };
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
  return response.data;
});
export const deleteUsers = createAsyncThunk(
  "users/deleteUsers",
  async (userid) => {
    const response = await axios.delete(
      `http://localhost:3001/users/${userid}`
    );
    return response.data;
  }
);
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userData) => {
    const response = await axios.put(
      `http://localhost:3001/users/${userData.id}`,
      userData
    );
    return response.data;
  }
);
