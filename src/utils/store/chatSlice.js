import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../constant";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      //Either we can do this
      //   if (state.message.length > 8) {
      //     state.message.pop();
      //   }
      state.message.splice(OFFSET_LIVE_CHAT, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
