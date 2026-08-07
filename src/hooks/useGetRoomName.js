import {useSelector} from "react-redux";

export const useGetRoomName = () => {
  const roomsCreated = useSelector((state) => state.rooms);

  return (uid) => roomsCreated["rooms"][uid]["username"] ? `~ @${roomsCreated["rooms"][uid]["username"]}` : (roomsCreated["rooms"][uid]["roomType"] === "user" ? `${roomsCreated["rooms"][uid]["fullName"]["firstname"]} ${roomsCreated["rooms"][uid]["fullName"]["lastname"]}` : roomsCreated["rooms"][uid]["groupName"])
}