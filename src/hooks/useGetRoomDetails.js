import {useGetLastMessages} from "./useGetLastMessages.js";

export const useGetRoomDetails = () => {
  const lastMessage = useGetLastMessages();

  return (room, getLastMessage = true) => {
    const { id: roomId, roomType, profile } = room;

    const unreadMessages = getLastMessage ? lastMessage(roomId, roomType) : {};
    const saved = roomType === "user" ? Boolean(room["fullName"]["firstname"] || room["fullName"]["lastname"]) : true;
    const name = (roomType === "user" ? (saved ? `${room["fullName"]["firstname"]} ${room["fullName"]["lastname"]}` : `~ @${room["username"]}`) : `${room["groupName"]}`)

    return { id: roomId, type: roomType, profile, name, saved, unreadMessages }
  }
}