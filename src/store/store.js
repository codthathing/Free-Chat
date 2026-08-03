import {configureStore, createSlice} from "@reduxjs/toolkit";

const messages = createSlice({
  name: "messages",
  initialState: [
    { id: 0, type: "mutual", text: "Wassup segun", time: "7:20pm" },
    { id: 1, type: "user", text: "Wagwan dude what have you been upto \n\nHow have you been", time: "7:20pm" },
    { id: 2, type: "mutual", text: "Mehn I'm just there, nothing much!", time: "7:20pm" },
    { id: 3, type: "mutual", text: "I'm good too", time: "7:20pm" },
  ],
  reducers: {
    addMessage: (state, action) => [...state, action.payload],
  },
});

export const { addMessage } = messages.actions;

const user = createSlice({
  name: "user",
  initialState: { username: "", email: "" },
  reducers: {
    updateDetails: (state, action) => ({ ...state, ...action.payload }),
  }
});

export const  { updateDetails } = user.actions;

export const store = configureStore({
  reducer: {
    messages: messages.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})
