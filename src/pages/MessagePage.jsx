import {Bell, MessageCircle, PhoneCall, Plus, Target, User, Users} from "lucide-react";
import display_picture from "../assets/display-picture.jpg";
import MessageProfileSection from "../components/messages/MessageProfileSection";
import MessageStatus from "../components/messages/MessageStatus";
import MessageChatSearch from "../components/messages/MessageChatSearch";
import MessageFooter from "../components/messages/MessageFooter";
import MessageUserProfile from "../components/messages/MessageUserProfile";
import MessageDesktopNavigation from "../components/messages/MessageDesktopNavigation";
import MessageDesktopHeader from "../components/messages/MessageDesktopHeader";
import { Route, Routes } from "react-router-dom";
import MutualPage from "./MutualPage";
import { useState } from "react";

const mutualsStatus = [
  { id: 0, displayPicture: display_picture, userName: "Adio" },
  { id: "1", displayPicture: display_picture, userName: "James Milner" },
  { id: 2, displayPicture: display_picture, userName: "James Milner" },
];

const mutaualsMessages = [
  {
    id: 0,
    displayPicture: display_picture,
    userName: { firstName: "John", lastName: "Doe" },
    message: "I have been texting you, thanks alot for the money I really appreciate...",
    timeOfMessage: "19:30 PM",
    amountOfUnreadMessages: 3,
  },
  {
    id: 1,
    displayPicture: display_picture,
    userName: { firstName: "alex", lastName: "kirk" },
    message: "I have been texting you, thanks alot for the money I really appreciate...",
    timeOfMessage: "19:30 PM",
    amountOfUnreadMessages: 3,
  },
];

const footerIconDetails = [
  { id: 0, Icon: MessageCircle, iconText: "messages" },
  { id: 1, Icon: PhoneCall, iconText: "calls" },
  { id: 2, Icon: Target, iconText: "status" },
  { id: 4, Icon: Bell, iconText: "notifications" },
  { id: 5, Icon: User, iconText: "profile" },
];

const tabList = [
  { id: 0, text: "inbox" },
  { id: 1, text: "unread" },
  { id: 2, text: "groups" },
];

function MessagePage({ showMutualPage }) {
  const [showProfile, setShowProfile] = useState(false);
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  return (
    <section className="h-dvh flex flex-col md:gap-y-0.5 md:bg-background-gray md:p-1">
      <header className="relative flex flex-col gap-y-4 px-3 py-6 w-full md:p-6 md:bg-white">
        <div className="flex md:gap-x-10 justify-between items-center">
          <h1 className="text-xl font-bold tracking-wider text-heading-black">FreeChat</h1>
          <MessageUserProfile profile={showProfile} setProfile={setShowProfile} />
        </div>
        <section className="flex flex-col gap-y-2 md:hidden">
          <MessageChatSearch setFilter={setShowFilterOptions} />
          {showFilterOptions && <main className="flex gap-x-2">
            {tabList.map(({ id, text }) => <div key={id} className="border border-light-gray rounded-2xl px-2.5 py-0.5 flex items-center justify-center capitalize">{text}</div>)}
            <div className="border border-light-gray rounded-2xl px-2.5 py-0.5 flex items-center justify-center capitalize"><Plus size={16} /></div>
          </main>}
        </section>
      </header>
      <section className="flex-1 overflow-hidden md:flex md:gap-x-0.5">
        <MessageDesktopNavigation navigationIcon={footerIconDetails.slice(0, 3)} />
        <div className="h-full md:w-full md:flex md:gap-x-0.5">
          <main className="px-3 md:bg-white h-full flex flex-col md:p-4 md:gap-y-4 md:w-2/5 lg:w-[30%] md:shrink-0 overflow-y-hidden">
            <MessageStatus mutualsStatus={mutualsStatus} />
            <MessageDesktopHeader />
            <MessageProfileSection mutualsMessageDetails={mutaualsMessages} />
          </main>
          <Routes>
            <Route
              path="/"
              element={
                <div className="hidden md:flex text-4xl items-center justify-center w-full h-full">
                  <p className="text-charcoal-black">Hello, welcome to FreeChat</p>
                </div>
              }
            />
            {!showMutualPage && <Route path=":mutual" element={<MutualPage />} />}
          </Routes>
        </div>
      </section>
      <MessageFooter footerIcons={footerIconDetails} profile={showProfile} setProfile={setShowProfile} />
    </section>
  );
}

export default MessagePage;
