const getUser = async (response) => {
  const users = await response.json();

  if (users.length === 0) throw new Error("User account not found! Create an account.");

  const user = await fetch(`http://localhost:4000/users/${users[0].id}`);

  return user.json();
}

export const getUserWithEmail = async (email) => {
  const users = await fetch(`http://localhost:4000/users?email=${encodeURIComponent(email)}`);

  const user = await getUser(users);

  sessionStorage.setItem("PASSWORD_RESET_ID", JSON.stringify(user.id));

  return {"success": "User confirmed!"};
}

export const getUserWithUsername = async (username, password) => {
  const response = await fetch(`http://localhost:4000/users?username=${encodeURIComponent(username)}`);

  const user = await getUser(response);

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

  const response = await fetch("http://localhost:4000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails)
  });

  if (!response.ok) throw new Error("User already exists!");

  return {"success": "User successfully registered!"};
}

export const updateUserPassword = async (id, password) => {
  const response = await fetch(`http://localhost:4000/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password
    })
  });

  if (!response.ok) throw new Error("Unable to update user password!");

  return {"success": "User password successfully updated!"};
}

export const getFriends = async (userId) => {
  const friendsResponse = await fetch(`http://localhost:4000/friends?u_id=${userId}`);
  const friends = await friendsResponse.json();

  return await Promise.all(
    friends.map(async ({friend_id, friend_firstname, friend_lastname}) => {
      const friendResponse = await fetch(`http://localhost:4000/users/${friend_id}`);
      const friend = await friendResponse.json();

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
  const friendsResponse = await fetch(`http://localhost:4000/friends?u_id=${userId}`);
  const groupsResponse = await fetch(`http://localhost:4000/room_members?u_id=${userId}`);

  const friends = await friendsResponse.json();
  const groups = await groupsResponse.json();

  const roomIds = [];

  const mappedFriends = await Promise.all(
    friends.map(async ({ room_id, friend_id, friend_firstname, friend_lastname }) => {
      const friendResponse = await fetch(`http://localhost:4000/users/${friend_id}`);
      const friend = await friendResponse.json();

      const profile = friend["profile"];
      const username = friend["username"];

      roomIds.push(room_id);

      return { id: room_id, roomType: "user", profile, username, fullName: {firstname: friend_firstname,lastname: friend_lastname} };
    })
  );

  const mappedGroups = await Promise.all(
    groups.map(async ({ room_id }) => {
      const groupResponse = await fetch(`http://localhost:4000/groups/${room_id}`);
      const group = await groupResponse.json();

      const groupName = group["room_name"];
      const profile = group["room_profile"];

      roomIds.push(room_id);

      return { id: room_id, roomType: "group", profile, groupName };
    })
  )

  return {roomDetails: [...mappedFriends, ...mappedGroups], roomIds};
}

export const getRoomMessages = async (room_ids, user_id) => {
  return await Promise.all(
    room_ids.map(async (room_id) => {
      const roomMessagesResponse = await fetch(`http://localhost:4000/messages?room_id=${room_id}`);
      const roomMessages = await roomMessagesResponse.json();

      const roomResponse = await fetch(`http://localhost:4000/rooms/${room_id}`);
      const room = await roomResponse.json();

      const mappedRoomMessages = roomMessages.map(({id, u_id, text, time_stamp}) => {
        const type = u_id === user_id ? "user" : "other";

        return {id, type, ...(room["type"] === "group" && {u_id}), text, time: time_stamp};
      })

      return {id: room_id, messages: mappedRoomMessages}
    })
  );
}

export const postMessageToRoom = async (roomType, messageObj) => {
  const messageResponse = await fetch(`http://localhost:4000/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageObj)
  });

  const { id, u_id, text, time_stamp } = await messageResponse.json();

  return {id, type: "user", ...(roomType === "group" && {u_id}), text, time: time_stamp};
}

export const getStatusUpdates = async (roomIds, u_id) => {
  const totalStatusIds = [u_id, ...roomIds];

  return await Promise.all(
    totalStatusIds.map(async (id) => {
       const statusResponse = await fetch(`http://localhost:4000/status_contents?id=${id}`);
       const status = await statusResponse.json();

       if (!status) return;

       return { id, status }
    })
  )
}