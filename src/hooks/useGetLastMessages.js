import {useSelector} from "react-redux";

const getUnreadCount = (messages) => {
  let count = 0;

  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].seen) break;

    count++;
  }

  return count;
};

export const useGetLastMessages = () => {
  const messages = useSelector((state) => state.messages);
  const roomsCreated = useSelector((state) => state.rooms);
  const { id: currentUserId } = useSelector((state) => state.user) || { id: undefined };

  return (uid) => messages[uid] ? { ...(messages[uid].at(-1).uid ? { name: roomsCreated["rooms"][messages[uid].at(-1).uid] ? (roomsCreated["rooms"][messages[uid].at(-1).uid]["username"] ? `~ @${roomsCreated["rooms"][messages[uid].at(-1).uid]["username"]}` : `${roomsCreated["rooms"][messages[uid].at(-1).uid]["fullName"]["firstname"]} ${roomsCreated["rooms"][messages[uid].at(-1).uid]["fullName"]["lastname"]}`) : (messages[uid].at(-1).uid === currentUserId ? "You" : "~ @unknown") } : { seen: messages[uid].at(-1)["type"] === "user" ? "check-check" : "" }), lastMessage: messages[uid].at(-1).text, time: messages[uid].at(-1).time, unreadCount: getUnreadCount(messages[uid]) } : { lastMessage: "", time: "", unreadCount: 0 };
}