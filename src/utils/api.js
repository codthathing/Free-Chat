const getUser = async (response) => {
  const users = await response.json();

  if (users.length === 0) throw new Error("User account not found! Create an account.");

  const user = await fetch(`http://localhost:4000/users/${users[0].id}`);

  return user.json();
}

export const getUserWithEmail = async (email) => {
  const users = await fetch(`http://localhost:4000/users?email=${encodeURIComponent(email)}`);

  return await getUser(users);
}

export const getUserWithUsername = async (username, password) => {
  const users = await fetch(`http://localhost:4000/users?username=${encodeURIComponent(username)}`);

  const user = await getUser(users);

  if (user.password !== password) throw new Error("Wrong password!");

  return user;
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

  const user = await fetch("http://localhost:4000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails)
  });

  return user.json();
}

export const updateUserPassword = async (id, password) => {
  const user = await fetch(`http://localhost:4000/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password
    })
  });

  return user.json();
}

export const getRooms = async (userId) => {
  const friendsResponse = await fetch(`http://localhost:4000/friends/u_id=${userId}`);
  const groupsResponse = await fetch(`http://localhost:4000/room_members/u_id=${userId}`);

  const friends = await friendsResponse.json();
  const groups = await groupsResponse.json();

  const mappedFriends = friends.map(async ({ room_id, friend_id, friend_firstname, friend_lastname }) => {
    const friendResponse = await fetch(`http://localhost:4000/users/${friend_id}`);
    const friend = await friendResponse.json();

    const profile = friend["profile"];

    return { id: room_id, roomType: "user", profile, fullName: {firstname: friend_firstname,lastname: friend_lastname} };
  })

  const mappedGroups = groups.map(async ({ room_id }) => {
    const groupResponse = await fetch(`http://localhost:4000/groups/${room_id}`);
    const group = await groupResponse.json();

    const groupName = group["room_name"];
    const profile = group["room_profile"];

    return { id: room_id, roomType: "group", profile, groupName };
  })

  return [...mappedFriends, mappedGroups];
}