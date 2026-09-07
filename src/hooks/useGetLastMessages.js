import {useSelector} from "react-redux";
import {selectEntitiesFriends, selectEntitiesMessages} from "../store/store.js";

// const getUnreadCount = (home) => {
//   let count = 0;
//
//   for (let i = home.length - 1; i >= 0; i--) {
//     if (home[i].seen) break;
//
//     count++;
//   }
//
//   return count;
// };

const getFriendName = (room) => {
  if (!room) return "~ @Unknown";

  const saved = Boolean(room["fullName"]["firstname"] || room["fullName"]["lastname"]);

  return saved ? `${room["fullName"]["firstname"]} ${room["fullName"]["lastname"]}` : `~ @${room["username"]}`;
}

export const useGetLastMessages = () => {
  const messagesEntities = useSelector(selectEntitiesMessages);
  const friendsEntities = useSelector(selectEntitiesFriends);
  const { user } = useSelector(state => state.user);

  if (!user) return null;

  return (roomId, roomType) => {
    if (!messagesEntities[roomId]) return {lastMessage: "", time: "", unreadCount: 0};

    const lastMessageObject = messagesEntities[roomId]["messages"].at(-1);

    return ({
      ...(roomType === "group"
        ? {
          name: lastMessageObject["u_id"] === user.id
            ? "You"
            : getFriendName(friendsEntities[lastMessageObject["u_id"]]),
        }
        : {seen: lastMessageObject["type"] === "user" ? "check-check" : ""}
      ),
      lastMessage: lastMessageObject["text"],
      time: lastMessageObject["time"],
      // unreadCount: getUnreadCount(home[uid]),
    })
  }
}