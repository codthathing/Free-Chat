import {configureStore, createSlice} from "@reduxjs/toolkit";
import {Bell, MessageCircle, PhoneCall, Target, User } from "lucide-react";
import display_picture from "../assets/display-picture.jpg";



const menuIconDetails = [
  { id: 0, Icon: MessageCircle, iconText: "messages" },
  { id: 1, Icon: PhoneCall, iconText: "calls" },
  { id: 2, Icon: Target, iconText: "status" },
  { id: 4, Icon: Bell, iconText: "notifications" },
  { id: 5, Icon: User, iconText: "profile" },
];

const tablist = [
  { id: 0, text: "inbox", tabId: "inbox-tab-button" },
  { id: 1, text: "unread", tabId: "unread-tab-button" },
  { id: 2, text: "groups", tabId: "groups-tab-button" },
];

const mobile = navigator.userAgentData ? navigator.userAgentData.mobile : /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

const messageUISlice = createSlice({
  name: "messageUI",
  initialState: { menuIconDetails, tablist, showUserProfileModal: false, showTabOptions: false, currentTabId: 0, mobile },
  reducers: {
    toggleTabContainer: (state) => !state.showTabOptions,
    toggleUserProfileModal: (state) => !state.showUserProfileModal,
    updateUserProfileModal: (state, action) => state.showUserProfileModal = action.payload,
    updateCurrentTabId: (state, action) => state.currentTabId = action.payload,
  }
})

export const { toggleTabContainer, toggleUserProfileModal, updateUserProfileModal, updateCurrentTabId } = messageUISlice.actions;



const roomsCreated = {
  uids: ["224", "435", "532", "746", "667", "137"],
  rooms: {
    "224": {
      uid: "224",
      roomType: "user",
      profile: display_picture,
      fullName: {firstname: "John", lastname: "Doe"},
      unreadMessages: {lastMessage: "I have been texting you, thanks a lot for the money I really appreciate...", time: "19:30 PM", unreadCount: 2
      },
    },
    "435": {
      uid: "435",
      roomType: "group",
      profile: display_picture,
      groupName: "Lousy Sponsors",
      unreadMessages: {name: "", lastMessage: "I have been texting you, thanks a lot for the money I really appreciate...", time: "19:30 PM", unreadCount: 2
      },
    },
    "532": {
      uid: "532",
      roomType: "user",
      profile: display_picture,
      fullName: {firstname: "Afolabi", lastname: "Akinwunmi"},
      unreadMessages: {lastMessage: "", time: "", count: 0}
    },
    "746": {
      uid: "746",
      roomType: "group",
      profile: display_picture,
      groupName: "Cracked Devs",
      unreadMessages: {lastMessage: "", time: "", count: 0}
    },
    "667": {
      uid: "667",
      roomType: "user",
      profile: display_picture,
      fullName: { firstname: "Boluwatife", lastname: "Olaleye" },
      unreadMessages: {lastMessage: "", time: "", count: 0}
    },
    "137": {
      uid: "137",
      roomType: "group",
      profile: display_picture,
      groupName: "Unexpected Odds",
      unreadMessages: {lastMessage: "", time: "", count: 0}
    }
  }
}

const roomsSlice = createSlice({
  name: "rooms",
  initialState: roomsCreated
})



const statusUpdates = {
  uids: ["125", "435", "224"],
  status: {
    "435": {uid: "435", status: [{content: "", seen: false}]},
    "125": {uid: "125", status: [{content: "", seen: true}]},
    "224": {uid: "224", status: [{content: "", seen: true}]},
  }
};

const roomStatusSlice = createSlice({
  name: "roomStatus",
  initialState: statusUpdates,
})



const roomMessages = {
  "224": [
    {id: 0, type: "other", text: "Wassup segun", time: "7:20pm", seen: true},
    {id: 1, type: "user", text: "Wagwan dude what have you been upto \n\nHow have you been", time: "7:20pm", seen: true},
    {id: 2, type: "other", text: "Mehn I'm just there, nothing much!", time: "7:20pm", seen: false},
    {id: 3, type: "other", text: "I'm good too", time: "7:20pm", seen: false}, // Chat friend replied last
  ],
  "435": [
    { id: 0, type: "other", uid: "224", seen: true },
    { id: 0, type: "user", uid: "125", seen: true },
    { id: 0, type: "other", uid: "437", seen: false } // Group unknown user replied last
  ],
  "746": [
    { id: 0, type: "user", uid: "437", seen: true },
    { id: 0, type: "other", uid: "532", seen: false },
    { id: 0, type: "other", uid: "224", seen: false }, // Group friend replied last
  ],
  "667": [
    { id: 0, type: "other", seen: true },
    { id: 0, type: "other", seen: true },
    { id: 0, type: "user", seen: true }, // Chat I replied last
  ],
  "137": [
    { id: 0, type: "other", uid: "224", seen: true },
    { id: 0, type: "other", uid: "532", seen: true },
    { id: 0, type: "user", uid: "125", seen: true }, // Group I replied last
  ]
}

const messagesSlice = createSlice({
  name: "messages",
  initialState: roomMessages,
  reducers: {
    addMessage: (state, uid, action) => [...state, action.payload],
  },
});

export const { addMessage } = messagesSlice.actions;



const userSlice = createSlice({
  name: "user",
  initialState: { uid: "125", username: "", email: "", profile: display_picture, firstname: "", lastname: "", rooms: { friends: ["224", "532", "667"], groups: ["435", "746", "137"] } },
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
