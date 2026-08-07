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

  return (uid) => messages[uid] ? { lastMessage: messages[uid].at(-1).text, time: messages[uid].at(-1).time, unreadCount: getUnreadCount(messages[uid]) } : { lastMessage: "", time: "", unreadCount: 0 };
}