const BASE_URL = import.meta.env.VITE_API_URL;

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })

  if (!res.ok) throw new Error(`Request failed: ${res.status}`);

  return res.json();
}

const resource = (name) => ({
  list: (query = '') => request(`/${name}${query}`),
  get: (id) => request(`/${name}/${id}`),
  create: (data) => request(`/${name}`, { method: 'POST', body: JSON.stringify(data) }),
  replace: (id, data) => request(`/${name}/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  update: (id, data) => request(`/${name}/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  remove: (id) => request(`/${name}/${id}`, { method: 'DELETE' }),
})

export const users = resource('users')
export const rooms = resource('rooms')
export const groups = resource('groups')
export const friends = resource('friends')
export const groupMembers = resource('group_members')
export const messages = resource('messages')
export const statusContents = resource('status_contents')

export const getUserWithEmail = async (email) => {
  const [user] = await users.list(`?email=${encodeURIComponent(email)}`);

  if (!user) throw new Error("User not found!");

  sessionStorage.setItem("PASSWORD_RESET_ID", JSON.stringify(user.id));

  return {"success": "User confirmed!"};
}

export const getUserWithUsername = async (username, password) => {
  const [user] = await users.list(`?username=${encodeURIComponent(username)}`);

  if (!user) throw new Error("User not found!");

  if (user.password !== password) throw new Error("Wrong password!");

  return { id: user.id };
}

export const postUser = async (username, email, password) => {
  const userDetails = {
    id: crypto.randomUUID(),
    username: username,
    email: email,
    password: password,
    profile: null,
    firstname: null,
    lastname: null,
  }

  await users.create(userDetails);

  return {"success": "User successfully registered!"};
}

export const updateUserPassword = async (id, password) => {
  await users.update(id, {password});

  return {"success": "User password successfully updated!"};
}

export const getFriends = async (userId) => {
  const friendsData = await friends.list(`?u_id=${userId}`);

  return await Promise.all(
    friendsData.map(async ({friend_id, friend_firstname, friend_lastname}) => {
      const friend = await users.get(friend_id);

      const profile = friend["profile"];
      const username = friend["username"];

      return {
        id: friend_id,
        roomType: "user",
        profile,
        username,
        fullName: {firstname: friend_firstname, lastname: friend_lastname}
      };
    })
  );
}

export const getRooms = async (userId) => {
  const friendsData = await friends.list(`?u_id=${userId}`);
  const groupsData = await groupMembers.list(`?u_id=${userId}`);

  const roomIds = [];

  const mappedFriends = await Promise.all(
    friendsData.map(async ({ room_id, friend_id, friend_firstname, friend_lastname }) => {
      const friend = await users.get(friend_id);

      const profile = friend["profile"];
      const username = friend["username"];

      roomIds.push(room_id);

      return { id: room_id, roomType: "user", profile, username, fullName: {firstname: friend_firstname,lastname: friend_lastname} };
    })
  );

  const mappedGroups = await Promise.all(
    groupsData.map(async ({ group_id }) => {
      const group = await groups.get(group_id);

      const groupName = group["group_name"];
      const profile = group["group_profile"];

      roomIds.push(group_id);

      return { id: group_id, roomType: "group", profile, groupName };
    })
  )

  return {roomDetails: [...mappedFriends, ...mappedGroups], roomIds};
}

export const getRoomMessages = async (room_ids, user_id) => {
  return await Promise.all(
    room_ids.map(async (room_id) => {
      const roomMessages = await messages.list(`?room_id=${room_id}`);
      const room = await rooms.get(room_id);

      const mappedRoomMessages = roomMessages.map(({id, u_id, text, time_stamp}) => {
        const type = u_id === user_id ? "user" : "other";

        return {id, type, ...(room["type"] === "group" && {u_id}), text, time: time_stamp};
      })

      return {id: room_id, messages: mappedRoomMessages}
    })
  );
}

export const postMessageToRoom = async (roomType, messageObj) => {
  const { id, u_id, text, time_stamp } = await messages.create(messageObj);

  return {id, type: "user", ...(roomType === "group" && {u_id}), text, time: time_stamp};
}

export const getStatusUpdates = async (roomIds, u_id) => {
  const totalStatusIds = [u_id, ...roomIds];

  return await Promise.all(
    totalStatusIds.map(async (id) => {
       const status = await statusContents.list(`?id=${id}`);

       if (!status) return;

       return { id, status }
    })
  )
}