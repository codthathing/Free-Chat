import {
  configureStore,
  createAsyncThunk, createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  getFriends,
  getRoomMessages,
  getRooms, getStatusUpdates, getUserWithUsername, postMessageToRoom, users,
} from "../utils/api.js";

const menuIconDetails = [
  { id: 0, iconKey: "message-circle", iconText: "chats", path: "/", links: ["/", "room"] },
  { id: 1, iconKey: "phone-call", iconText: "calls", path: "/calls", links: ["calls"] },
  { id: 2, iconKey: "target", iconText: "status", path: "/status", links: ["status"] },
  { id: 4, iconKey: "bell", iconText: "notifications", path: "/notifications", links: ["notifications"] },
  { id: 5, iconKey: "user", iconText: "profile" },
];

const tablist = [
  { id: 0, text: "inbox", tabId: "inbox-tab-button" },
  { id: 1, text: "unread", tabId: "unread-tab-button" },
  { id: 2, text: "groups", tabId: "groups-tab-button" },
];

const initialState = {
  menuIconDetails,
  tablist,
  userId: sessionStorage.getItem("USER_ID"),
  actionState: { status: false, type: "", message: "" },
  showUserProfileModal: false,
  showTabOptions: false,
  currentTabId: 0,
};

const messageUISlice = createSlice({
  name: "messageUI",
  initialState: initialState,
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
    updateActionState: (state, action) => {
      state.actionState = action.payload
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
      sessionStorage.setItem("USER_ID", action.payload);
    },
    logout: (state) => {
      state.userId = null;
      sessionStorage.removeItem("USER_ID");
    },
  }
})

export const { toggleTabContainer, toggleUserProfileModal, setUserId, logout, updateUserProfileModal, updateCurrentTabId, updateActionState } = messageUISlice.actions;


export const store = configureStore({
  reducer: {
    messageUI: messageUISlice.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  preloadedState: { messageUI: { ...initialState } },
})





const friendsAdapter = createEntityAdapter();

export const fetchFriends = async (userId) => {
  const friends = await getFriends(userId);

  if (!friends) throw new Error("Unable to fetch friends");

  return friends;
}

const friendsSlice = createSlice({
  name: "friends",
  initialState: friendsAdapter.getInitialState(),
  reducers: {},
})

export const { selectEntities: selectEntitiesFriends } = friendsAdapter.getSelectors(state => state.friends);



const roomsAdapter = createEntityAdapter();

export const fetchRooms = async (id) => {
  const rooms = await getRooms(id);

  if (!rooms) throw new Error("Unable to fetch rooms");

  return {roomDetails: rooms.roomDetails, roomIds: rooms.roomIds};
}

const roomsSlice = createSlice({
  name: "rooms",
  initialState : roomsAdapter.getInitialState(),
  reducers: {},
})

export const { selectAll: selectAllRooms, selectById: selectByIdRooms, selectEntities: selectEntitiesRooms } = roomsAdapter.getSelectors(state => state.rooms);



const statusAdapter = createEntityAdapter();

export const fetchStatus = async (room_ids, id) => {
  const status = await getStatusUpdates(room_ids, id);

  if (!status) throw new Error("Unable to fetch room statuses!");

  return status;
}

const roomStatusSlice = createSlice({
  name: "status",
  initialState: statusAdapter.getInitialState(),
  reducers: {},
})

export const {selectAll: selectAllStatus} = statusAdapter.getSelectors(state => state.status);



const messagesAdapter = createEntityAdapter();

export const fetchMessages = async (room_ids, id) => {
  const messages = await getRoomMessages(room_ids, id);

  if (!messages) throw new Error("Unable to fetch room messages!");

  return messages;
}

export const addMessage = createAsyncThunk("post/home", async ({roomId, roomType, messageObj}) => {
  const message = await postMessageToRoom(roomType, messageObj);

  if (!message) throw new Error("Unable to add message!");

  return {roomId, message};
})

const messagesSlice = createSlice({
  name: "messages",
  initialState: messagesAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addMessage.fulfilled, (state, action) => {
      const { roomId, message } = action.payload;
      const room = state.entities[roomId];

      if (room) {
        room.messages.push(message);
      } else {
        messagesAdapter.addOne(state, { id: roomId, messages: [message] });
      }
    })
  }
});

export const { selectEntities: selectEntitiesMessages, selectById: selectByIdMessages } = messagesAdapter.getSelectors(state => state.messages);



export const fetchUserId = async (id) => {
  return await users.get(id);
}

export const fetchUserWithUsername = async (username, password, dispatch) => {
  const { id } = await getUserWithUsername(username, password);
  await dispatch(setUserId(id));
}

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {},
});


export const makeStore = (userData, roomsData, friendsData, messagesData, statusData) => {
  return configureStore({
    reducer: {
      messageUI: messageUISlice.reducer,
      rooms: roomsSlice.reducer,
      status: roomStatusSlice.reducer,
      messages: messagesSlice.reducer,
      user: userSlice.reducer,
      friends: friendsSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: {
      user: userData,
      rooms: roomsAdapter.setAll(roomsAdapter.getInitialState(), roomsData),
      friends: friendsAdapter.setAll(friendsAdapter.getInitialState(), friendsData),
      messages: messagesAdapter.setAll(messagesAdapter.getInitialState(), messagesData),
      status: statusAdapter.setAll(statusAdapter.getInitialState(), statusData),
    }
  })
}
