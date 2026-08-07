import {configureStore, createSlice} from "@reduxjs/toolkit";
import display_picture from "../assets/display-picture.jpg";

const menuIconDetails = [
  { id: 0, iconKey: "message-circle", iconText: "messages" },
  { id: 1, iconKey: "phone-call", iconText: "calls" },
  { id: 2, iconKey: "target", iconText: "status" },
  { id: 4, iconKey: "bell", iconText: "notifications" },
  { id: 5, iconKey: "user", iconText: "profile" },
];

const tablist = [
  { id: 0, text: "inbox", tabId: "inbox-tab-button" },
  { id: 1, text: "unread", tabId: "unread-tab-button" },
  { id: 2, text: "groups", tabId: "groups-tab-button" },
];


const messageUISlice = createSlice({
  name: "messageUI",
  initialState: { menuIconDetails, tablist, showUserProfileModal: false, showTabOptions: false, currentTabId: 0 },
  reducers: {
    toggleTabContainer: (state) => {
      state.showTabOptions = !state.showTabOptions
    },
    toggleUserProfileModal: (state) => {
      state.showUserProfileModal = !state.showUserProfileModal
    },
    updateUserProfileModal: (state, action) => {
      state.showUserProfileModal = action.payload
    },
    updateCurrentTabId: (state, action) => {
      state.currentTabId = action.payload
    },
  }
})

export const { toggleTabContainer, toggleUserProfileModal, updateUserProfileModal, updateCurrentTabId } = messageUISlice.actions;



const roomsCreated = {
  uids: ["224", "435", "532", "746", "667", "137", "642"],
  rooms: {
    "224": {
      uid: "224",
      roomType: "user",
      profile: display_picture,
      fullName: {firstname: "John", lastname: "Doe"},
    },
    "435": {
      uid: "435",
      roomType: "group",
      profile: display_picture,
      groupName: "Lousy Sponsors",
    },
    "532": {
      uid: "532",
      roomType: "user",
      profile: display_picture,
      fullName: {firstname: "Afolabi", lastname: "Akinwunmi"},
    },
    "746": {
      uid: "746",
      roomType: "group",
      profile: display_picture,
      groupName: "Cracked Devs",
    },
    "667": {
      uid: "667",
      roomType: "user",
      profile: display_picture,
      fullName: { firstname: "Boluwatife", lastname: "Olaleye" },
    },
    "137": {
      uid: "137",
      roomType: "group",
      profile: display_picture,
      groupName: "Unexpected Odds",
    },
    "642": {
      uid: "642",
      roomType: "user",
      profile: display_picture,
      username: "pheezy"
    }
  }
}

const roomsSlice = createSlice({
  name: "rooms",
  initialState : roomsCreated,
  reducers: {}
})



const statusUpdates = {
  uids: ["125", "435", "224", "642", "746", "667"],
  status: {
    "435": {uid: "435", status: [{content: "", seen: false}]},
    "125": {uid: "125", status: [{content: "", seen: true}]},
    "224": {uid: "224", status: [{content: "", seen: true}]},
    "642": {uid: "642", status: [{content: "", seen: false}]},
    "746": {uid: "746", status: [{content: "", seen: true}]},
    "667": {uid: "667", status: [{content: "", seen: true}]},
  }
};

const roomStatusSlice = createSlice({
  name: "roomStatus",
  initialState: statusUpdates,
  reducers: {}
})



const roomMessages = {
  "224": [
    {id: 0, type: "other", text: "Wassup Segun 👋", time: "7:20 PM", seen: true,},
    {id: 1, type: "user", text: "Wagwan dude 😂\n\nWhat have you been up to? How have you been?", time: "7:22 PM", seen: true,},
    {id: 2, type: "other", text: "Nothing much bro, just work and sleep these days 😅", time: "7:24 PM", seen: false,},
    {id: 3, type: "other", text: "We should catch up this weekend if you're free.", time: "7:25 PM", seen: false,}, // Chat friend replied last
  ],

  "435": [
    {id: 0, type: "other", uid: "224", text: "Who's coming for football tomorrow?", time: "9:10 AM", seen: true,},
    {id: 1, type: "user", uid: "125", text: "I'm in 🙌", time: "9:12 AM", seen: true,},
    {id: 2, type: "other", uid: "437", text: "Great! Let's meet at the usual pitch by 4.", time: "9:15 AM", seen: false,}, // Group unknown user replied last
  ],

  "746": [
    {id: 0, type: "user", uid: "125", text: "Has anyone finished the UI designs?", time: "2:40 PM", seen: true,},
    {id: 1, type: "other", uid: "532", text: "Almost done. Just fixing responsiveness.", time: "2:45 PM", seen: false,},
    {id: 2, type: "other", uid: "224", text: "I'll push everything to GitHub tonight.", time: "2:47 PM", seen: false,}, // Group friend replied last
  ],

  "667": [
    {id: 0, type: "other", text: "Happy birthday! 🎉", time: "8:30 AM", seen: true,},
    {id: 1, type: "other", text: "Hope you have an amazing day!", time: "8:31 AM", seen: true,},
    {id: 2, type: "user", text: "Thank you so much! I really appreciate it ❤️", time: "8:35 AM", seen: true,}, // Chat I replied last
  ],

  "137": [
    {id: 0, type: "other", uid: "224", text: "Should we deploy today?", time: "11:50 AM", seen: true,},
    {id: 1, type: "other", uid: "532", text: "Everything looks good from my end.", time: "11:53 AM", seen: true,},
    {id: 2, type: "user", uid: "125", text: "Perfect. I'll handle the deployment after lunch.", time: "11:55 AM", seen: true,}, // Group I replied last
  ],
};

const messagesSlice = createSlice({
  name: "messages",
  initialState: roomMessages,
  reducers: {
    addMessage: (state, action) => {
      if (!state[action.payload.uid]) {
        state[action.payload.uid] = [action.payload.message];
      } else {
        state[action.payload.uid].push(action.payload.message);
      }
    },
  },
});

export const { addMessage } = messagesSlice.actions;



const userSlice = createSlice({
  name: "user",
  initialState: { uid: "125", username: "", email: "", profile: display_picture, firstname: "", lastname: "", rooms: { friends: ["224", "532", "667", "642"], groups: ["435", "746", "137"] } },
  reducers: {
    updateDetails: (state, action) => ({ ...state, ...action.payload }),
  }
});

export const  { updateDetails } = userSlice.actions;



export const store = configureStore({
  reducer: {
    messageUI: messageUISlice.reducer,
    rooms: roomsSlice.reducer,
    status: roomStatusSlice.reducer,
    messages: messagesSlice.reducer,
    user: userSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})
