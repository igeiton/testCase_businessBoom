import { createSlice } from "@reduxjs/toolkit";
import { logs } from "../../../public/data";
import { LogType } from "../../types/logTypes";

type InitialStateType = {
  logs: LogType[];
};

const initialState: InitialStateType = {
  logs,
};

const logsSlice = createSlice({
  name: "logsSlice",
  initialState,
  reducers: {
    addLog: (state, action) => {
      state.logs.push(action.payload);
      state.logs.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    },
  },
});

export const { addLog } = logsSlice.actions;

export default logsSlice.reducer;
