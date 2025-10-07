import { Bell, MessageCircle, PhoneCall, Target, User } from "lucide-react";
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
  { id: 3, Icon: Bell, iconText: "notifications" },
  { id: 4, Icon: User, iconText: "profile" },
];

function MessagePage({ showMutualPage }) {
  return (
    <section className="h-[100dvh] flex flex-col md:gap-y-0.5 md:bg-[#F2F2F2] md:p-1">
      <header className="flex flex-col gap-y-4 px-3 py-5 w-full md:p-6 md:bg-white">
        <div className="flex md:gap-x-10 justify-between items-center">
          <h1 className="text-xl font-bold tracking-wider text-[#2B2B2B]">FreeChat</h1>
          <MessageUserProfile />
        </div>
        <MessageChatSearch className={"md:hidden"} />
      </header>
      <section className="flex-1 overflow-hidden md:flex md:gap-x-0.5">
        <MessageDesktopNavigation navigationIcon={footerIconDetails.slice(0, 3)} />
        <div className="h-full md:w-full md:flex md:gap-x-0.5">
          <main className="px-3 md:bg-white h-full flex flex-col md:p-4 md:gap-y-4 md:w-2/5 lg:w-[30%] md:flex-shrink-0 overflow-y-hidden">
            <MessageStatus mutualsStatus={mutualsStatus} />
            <MessageDesktopHeader />
            <MessageProfileSection mutualsMessageDetails={mutaualsMessages} />
          </main>
          <Routes>
            <Route
              path="/"
              element={
                <div className="hidden md:flex text-4xl items-center justify-center w-full h-full">
                  <p>Hello, welcome to FreeChat</p>
                </div>
              }
            />
            {!showMutualPage && <Route path=":mutual" element={<MutualPage />} />}
          </Routes>
        </div>
      </section>
      <MessageFooter footerIcons={footerIconDetails} />
    </section>
  );
}

export default MessagePage;
