import { ArrowLeft, PhoneCall, Video } from "lucide-react";
import RoomMessagesIcons from "../components/room/RoomMessagesIcons.jsx";
import RoomProfile from "../components/room/RoomProfile.jsx";
import RoomMessagesDate from "../components/room/RoomMessagesDate.jsx";
import { useModifiedMessageObjects } from "../hooks/useModifiedMessageObjects";
import RoomMessageSection from "../components/room/RoomMessageSection.jsx";
import RoomFooter from "../components/room/RoomFooter.jsx";
import {useNavigate, useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {selectByIdMessages, selectByIdRooms} from "../store/store.js";

const mutualIcons = [
  { id: 0, Icon: Video },
  { id: 1, Icon: PhoneCall },
];

const EMPTY_MESSAGES = [];

export default function RoomPage({ className }) {
  const { room_id } = useParams();
  const navigate = useNavigate();

  const { messages } = useSelector(state => selectByIdMessages(state, room_id)) ?? {messages: EMPTY_MESSAGES};
  const { array } = useModifiedMessageObjects(messages);

  const room = useSelector((state) => selectByIdRooms(state, room_id));

  if (!room || !messages) return;

  const { id: roomId, roomType, profile } = room;
  const saved = roomType === "user" ? Boolean(room["fullName"]["firstname"] || room["fullName"]["firstname"]) : true;
  const name = (roomType === "user" ? (saved ? `${room["fullName"]["firstname"]} ${room["fullName"]["lastname"]}` : `~ @${room["username"]}`) : `${room["groupName"]}`);

  return (
    <section className={`${className} flex flex-col md:w-full`}>
      <header className="flex justify-between items-center p-4 md:bg-white">
        <div className="flex gap-x-5 items-center">
          <ArrowLeft size={20} className="text-heading-black md:hidden cursor-pointer" onClick={() => navigate(-1)} />
          <RoomProfile name={name} profile={profile} saved={saved} />
        </div>
        <RoomMessagesIcons messageIconDetails={mutualIcons} />
      </header>
      <main className="bg-background-gray flex-1 relative overflow-hidden">
        <RoomMessagesDate />
        <RoomMessageSection messageDetailsArray={array} />
      </main>
      <RoomFooter roomId={roomId} roomType={roomType} />
    </section>
  );
}

RoomPage.propTypes = {
    className: PropTypes.string,
}
