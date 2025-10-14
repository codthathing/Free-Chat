import { ArrowLeft, PhoneCall, Video } from "lucide-react";
import MessageIcons from "../components/messages/MessageIcons";
import MutualProfile from "../components/mutuals/MutualProfile";
import MutualMessagesDate from "../components/mutuals/MutualMessagesDate";
import { useModifiedMessageObjects } from "../hooks/useModifiedMessageObjects";
import MutualMessageSection from "../components/mutuals/MutualMessageSection";
import MutualFooter from "../components/mutuals/MutualFooter";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const mutualIcons = [
  { id: 0, Icon: Video },
  { id: 1, Icon: PhoneCall },
];

export default function MutualPage({ className }) {
  const messageState = useSelector((state) => state.messages);

  const { array } = useModifiedMessageObjects(messageState);
  const navigate = useNavigate();

  return (
    <section className={`${className} flex flex-col md:w-full relative overflow-hidden`}>
      <header className="flex justify-between items-center p-4 md:bg-white absolute lg:relative top-0 w-full z-10 bg-white">
        <div className="flex gap-x-5 items-center">
          <ArrowLeft size={20} className="text-[#2B2B2B] md:hidden cursor-pointer" onClick={() => navigate("/messages")} />
          <MutualProfile />
        </div>
        <MessageIcons messageIconDetails={mutualIcons} />
      </header>
      <main className="bg-[#F2F2F2] flex-1 relative overflow-hidden mt-20 md:mt-[4.5rem] lg:mt-0">
        <MutualMessagesDate />
        <MutualMessageSection messageDetailsArray={array} />
      </main>
      <MutualFooter />
    </section>
  );
}
