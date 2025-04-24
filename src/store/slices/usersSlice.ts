import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../../public/data";
import { AccessLevelsEnum, UserType } from "../../types/userTypes";

type InitialStateType = {
  currentUser: null | UserType;
  users: UserType[];
};

const initialState: InitialStateType = {
  currentUser: null,
  users,
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },

    updateUser(state, action) {
      const { id, role, accessLevel } = action.payload;
      const user = state.users.find((user) => user.id === id);

      if (
        !user ||
        Number(state.currentUser?.access_level) < AccessLevelsEnum.THREE ||
        Number(state.currentUser?.access_level) < user.access_level
      )
        return;

      if (user.id === state.currentUser?.id) {
        state.currentUser.role = role;
        state.currentUser.access_level = accessLevel;
      }

      user.role = role;
      user.access_level = accessLevel;
    },

    deleteUser(state, action) {
      const { id } = action.payload;
      state.users = state.users.filter((user) => user.id !== id);
    },
  },
});

export const { setCurrentUser, updateUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
