import { Camera, Edit, MessageCircle, SlidersHorizontal } from "lucide-react";
import display_picture from "../assets/display-picture.jpg";
import MessageProfileSection from "../components/messages/MessageProfileSection";
import MessageStatus from "../components/messages/MessageStatus";
import MessageChatSearch from "../components/messages/MessageChatSearch";
import MessageUserStatus from "../components/messages/MessageUserStatus";
import MessageIcons from "../components/messages/MessageIcons";
import MessageFooter from "../components/messages/MessageFooter";

const messageIconDetails = [
  { id: 0, Icon: Camera },
  { id: 1, Icon: Edit },
];

const mutualsStatus = [
  { id: 0, displayPicture: display_picture, userName: "Adio" },
  { id: "1", displayPicture: display_picture, userName: "James Milner" },
];

const mutaualsMessages = [
  {
    id: 0,
    displayPicture: display_picture,
    userName: { firstName: "John", lastName: "Doe" },
    message:
      "I have been trying to reach, thanks alot for the money I really appreciate...",
    timeOfMessage: "19:30 PM",
    amountOfUnreadMessages: 3,
  },
];

const footerIconDetails = [
  { id: 0, Icon: MessageCircle, iconText: "messages" },
  { id: 1, Icon: MessageCircle, iconText: "profile" },
  { id: 2, Icon: MessageCircle, iconText: "messages" },
];

function MessagePage() {
  return (
    <section>
      <header className="grid gap-y-3.5 px-3 pt-4 pb-5 w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl font-bold tracking-wider text-[#2B2B2B]">
            Messages
          </h1>
          <MessageIcons messageIconDetails={messageIconDetails} />
        </div>
        <form className="flex items-center gap-x-4 py-2 px-4 rounded-2xl bg-[#F8F8F8]">
          <MessageChatSearch />
          <SlidersHorizontal size={16} className="text-[#5F5F5F]" />
        </form>
      </header>
      <main className="px-3">
        <section className="border-b border-[#F8F8F8] pb-4">
          <h3 className="text-[#C2C2C2] text-sm mb-3">Recent Update</h3>
          <main className="flex gap-x-3">
            <MessageUserStatus />
            <MessageStatus mutualsStatus={mutualsStatus} />
          </main>
        </section>
        <MessageProfileSection mutualsMessageDetails={mutaualsMessages} />
      </main>
      <MessageFooter footerIcons={footerIconDetails} />
    </section>
  );
}

export default MessagePage;
