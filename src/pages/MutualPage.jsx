import { ArrowLeft, Mic, PhoneCall, Plus, Video, SendHorizonal } from "lucide-react";
import MessageIcons from "../components/messages/MessageIcons";
import MutualProfile from "../components/mutuals/MutualProfile";
import MutualMessagesDate from "../components/mutuals/MutualMessagesDate";
import { useModifiedMessageObjects } from "../hooks/useModifiedMessageObjects";
import MutualMessageSection from "../components/mutuals/MutualMessageSection";
import MutualFooter from "../components/mutuals/MutualFooter";
import { useNavigate } from "react-router-dom";

const mutualIcons = [
  { id: 0, Icon: Video },
  { id: 1, Icon: PhoneCall },
];

const messageDetails = [
  { id: 0, type: "mutual", text: "Wassup segun", time: "7:20pm" },
  { id: 1, type: "user", text: "Wagwan dude what have you been upto \n\nHow have you been", time: "7:20pm" },
  { id: 2, type: "mutual", text: "Mehn I'm just there, nothing much!", time: "7:20pm" },
  { id: 3, type: "mutual", text: "I'm good too", time: "7:20pm" },
];

export default function MutualPage({ className }) {
  const { array } = useModifiedMessageObjects(messageDetails);
  const navigate = useNavigate();

  return (
    <section className={`${className} flex flex-col md:w-full`}>
      <header className="flex justify-between items-center p-4 md:bg-white">
        <div className="flex gap-x-5 items-center">
          <ArrowLeft size={20} className="text-[#2B2B2B] md:hidden cursor-pointer" onClick={() => navigate("/messages")} />
          <MutualProfile />
        </div>
        <MessageIcons messageIconDetails={mutualIcons} />
      </header>
      <main className="bg-[#F2F2F2] flex-1 relative">
        <MutualMessagesDate />
        <MutualMessageSection messageDetailsArray={array} />
      </main>
      <MutualFooter />
    </section>
  );
}
