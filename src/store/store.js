import {
  configureStore,
  createAsyncThunk, createEntityAdapter,
  createSlice, isAnyOf,
} from "@reduxjs/toolkit";
import {
  getFriends,
  getRoomMessages,
  getRooms, getStatusUpdates,
  getUserWithEmail,
  getUserWithUsername, postMessageToRoom,
  postUser,
  updateUserPassword
} from "../utils/api.js";

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
  initialState: { menuIconDetails, tablist, actionState: { status: false, type: "", message: "" }, showUserProfileModal: false, showTabOptions: false, currentTabId: 0 },
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
    }
  }
})

export const { toggleTabContainer, toggleUserProfileModal, updateUserProfileModal, updateCurrentTabId, updateActionState } = messageUISlice.actions;



const friendsAdapter = createEntityAdapter();

export const fetchFriends = createAsyncThunk("fetch/friends", async (userId) => {
  const friends = await getFriends(userId);

  if (!friends) throw new Error("Unable to fetch friends");

  return friends;
})

const friendsSlice = createSlice({
  name: "friends",
  initialState: friendsAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFriends.fulfilled, (state, action) => {
      friendsAdapter.setAll(state, action.payload);
    })
  },
})

export const { selectEntities: selectEntitiesFriends } = friendsAdapter.getSelectors(state => state.friends);



const roomsAdapter = createEntityAdapter();

export const fetchRooms = createAsyncThunk("fetch/rooms", async (id) => {
  const rooms = await getRooms(id);

  if (!rooms) throw new Error("Unable to fetch rooms");

  return rooms;
})

const roomsSlice = createSlice({
  name: "rooms",
  initialState : roomsAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      roomsAdapter.setAll(state, action.payload);
    })
  }
})

export const { selectAll: selectAllRooms, selectIds: selectIdsRooms, selectById: selectByIdRooms, selectEntities: selectEntitiesRooms } = roomsAdapter.getSelectors(state => state.rooms);



const statusAdapter = createEntityAdapter();

export const fetchStatus = createAsyncThunk("fetch/status", async ({roomIds, u_id}) => {
  const status = await getStatusUpdates(roomIds, u_id);

  if (!status) throw new Error("Unable to fetch status");

  return status;
})

const roomStatusSlice = createSlice({
  name: "status",
  initialState: statusAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatus.fulfilled, (state, action) => {
      statusAdapter.setAll(state, action.payload);
    })
  }
})

export const {selectAll: selectAllStatus} = statusAdapter.getSelectors(state => state.status);



const messagesAdapter = createEntityAdapter();

export const fetchMessages = createAsyncThunk("fetch/messages", async ({room_ids, id}) => {
  const messages = await getRoomMessages(room_ids, id);

  if (!messages) throw new Error("Unable to fetch messages");

  return messages;
})

export const addMessage = createAsyncThunk("post/messages", async ({roomId, roomType, messageObj}) => {
  const message = await postMessageToRoom(roomType, messageObj);

  if (!message) throw new Error("Unable to post message");

  return {roomId, message};
})

const messagesSlice = createSlice({
  name: "messages",
  initialState: messagesAdapter.getInitialState({
    loading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      messagesAdapter.setAll(state, action.payload);
    }).addCase(addMessage.fulfilled, (state, action) => {
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



export const fetchUserId = createAsyncThunk("user/fetch/id", async (id) => {
  const user = await fetch(`http://localhost:4000/users/${id}`);

  return user.json();
})

export const fetchUserUsername = createAsyncThunk("user/fetch/username", async ({username, password}) => {
  const user = await getUserWithUsername(username, password);

  if (!user) throw new Error("Wrong login information! Try again.");

  return user;
})

export const fetchUserEmail = createAsyncThunk("user/fetch/email", async (email) => {
  const user = await getUserWithEmail(email);

  if (!user) throw new Error("Unable to fetch user account!");

  return user;
});

export const createUser = createAsyncThunk("user/create", async ({username, email, password}) => {
  const user = await postUser(username, email, password);

  if (!user) throw new Error("Unable to create user account! Try again.");

  return user;
})

export const updatePassword = createAsyncThunk("user/update/password", async ({ id, password }) => {
  const user = await updateUserPassword(id, password);

  if (!user) throw new Error("Unable to update user password!");

  return user;
})

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(fetchUserId.fulfilled, fetchUserUsername.fulfilled, fetchUserEmail.fulfilled, createUser.fulfilled, updatePassword.fulfilled), (state, action) => {
      state.user = action.payload;
    });
  }
});


export const store = configureStore({
  reducer: {
    messageUI: messageUISlice.reducer,
    rooms: roomsSlice.reducer,
    status: roomStatusSlice.reducer,
    messages: messagesSlice.reducer,
    user: userSlice.reducer,
    friends: friendsSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})
