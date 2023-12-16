import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userList",
  initialState: [],
  reducers: {
    saveUser(state, action) {
      state.push(action.payload);
    },
  },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
