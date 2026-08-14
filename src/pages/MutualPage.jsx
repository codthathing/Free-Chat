import { ArrowLeft, PhoneCall, Video } from "lucide-react";
import MutualMessagesIcons from "../components/mutuals/MutualMessagesIcons.jsx";
import MutualProfile from "../components/mutuals/MutualProfile";
import MutualMessagesDate from "../components/mutuals/MutualMessagesDate";
import { useModifiedMessageObjects } from "../hooks/useModifiedMessageObjects";
import MutualMessageSection from "../components/mutuals/MutualMessageSection";
import MutualFooter from "../components/mutuals/MutualFooter";
import {useNavigate, useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {useEffect} from "react";

const mutualIcons = [
  { id: 0, Icon: Video },
  { id: 1, Icon: PhoneCall },
];

const EMPTY_MESSAGES = [];

export default function MutualPage({ className }) {
  const { uid } = useParams();

  const messageState = useSelector((state) => state.messages[uid]) ?? EMPTY_MESSAGES;
  const { array } = useModifiedMessageObjects(messageState);

  const roomDetails = useSelector((state) => state.rooms["rooms"][uid]);
  const { uid: roomId, roomType, profile, name, saved } = {...roomDetails, saved: Boolean(roomDetails["username"]), name: roomDetails["username"] ? `@${roomDetails["username"]}` : (roomDetails["roomType"] === "user" ? `${roomDetails["fullName"]["firstname"]} ${roomDetails["fullName"]["lastname"]}` : roomDetails["groupName"])};

  const navigate = useNavigate();

  return (
    <section className={`${className} flex flex-col md:w-full`}>
      <header className="flex justify-between items-center p-4 md:bg-white">
        <div className="flex gap-x-5 items-center">
          <ArrowLeft size={20} className="text-heading-black md:hidden cursor-pointer" onClick={() => navigate("/messages")} />
          <MutualProfile name={name} profile={profile} saved={saved} />
        </div>
        <MutualMessagesIcons messageIconDetails={mutualIcons} />
      </header>
      <main className="bg-background-gray flex-1 relative overflow-hidden">
        <MutualMessagesDate />
        <MutualMessageSection messageDetailsArray={array} />
      </main>
      <MutualFooter roomId={roomId} roomType={roomType} />
    </section>
  );
}

MutualPage.propTypes = {
    className: PropTypes.string,
}
