import { ArrowLeft, CheckCheck, Mic, PhoneCall, Plus, Video } from "lucide-react";
import MessageIcons from "../components/messages/MessageIcons";
import MutualProfile from "../components/mutuals/MutualProfile";
import MutualMessagesDate from "../components/mutuals/MutualMessagesDate";
import { useModifiedMessageObjects } from "../hooks/useModifiedMessageObjects";
import MutualMessageSection from "../components/mutuals/MutualMessageSection";

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

export default function MutualPage() {
  const { array } = useModifiedMessageObjects(messageDetails);

  return (
    <section className="h-[100dvh] flex flex-col">
      <header className="flex justify-between items-center p-4">
        <div className="flex gap-x-5 items-center">
          <ArrowLeft size={20} className="text-[#2B2B2B]" />
          <MutualProfile />
        </div>
        <MessageIcons messageIconDetails={mutualIcons} />
      </header>
      <main className="bg-[#F2F2F2] flex-1 relative">
        <MutualMessagesDate />
        <MutualMessageSection messageDetailsArray={array} />
      </main>
      <footer>
        <div>
          <Plus />
        </div>
        <div>
          <input type="text" name="" />
          <Mic />
        </div>
      </footer>
    </section>
  );
}
