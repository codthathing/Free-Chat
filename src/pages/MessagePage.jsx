import { Users } from "lucide-react";
import MessageSection from "../components/messages/MessageSection.jsx";
import MessageMobileStatus from "../components/messages/MessageMobileStatus.jsx";
import MessageUserProfile from "../components/messages/MessageUserProfile.jsx";
import { Route, Routes } from "react-router-dom";
import MutualPage from "./MutualPage";
import {useSelector} from "react-redux";
import MessageNavigationMenu from "../components/messages/MessageNavigationMenu.jsx";
import MessageMobileProfileModal from "../components/messages/MessageMobileProfileModal.jsx";
import MessageChatSearch from "../components/messages/MessageChatSearch.jsx";
import MessageTabs from "../components/messages/MessageTabs.jsx";
import PropTypes from "prop-types";

export default function MessagePage({ mobile }) {
  const { currentTabId, showUserProfileModal, menuIconDetails, showTabOptions } = useSelector((state) => state.messageUI);

  return (
    <section className="h-dvh flex flex-col md:gap-y-0.5 md:bg-background-gray md:p-1">
      <header className="relative flex flex-col gap-y-4 px-3 py-6 w-full md:p-6 md:bg-white">
        <div className="flex md:gap-x-10 justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider text-heading-black">FreeChat</h1>
          <MessageUserProfile />
        </div>
        <section className="flex flex-col gap-y-2 md:hidden">
          <MessageChatSearch />
          {showTabOptions && <MessageTabs tabContainerClassName={"gap-x-3.5"} tablistClassName={"gap-x-3.5"} tabClassName={"rounded-2xl w-24 flex-none py-1 flex items-center justify-center cursor-pointer capitalize"} activeTabClassName={"bg-charcoal-black text-white"}  inActiveTabClassName={"border border-light-gray"} plusIconClassName={`border border-light-gray w-7 h-7 flex-none shrink-0 rounded-full flex items-center justify-center capitalize`} />}
        </section>
      </header>
      <section className="flex-1 overflow-hidden md:flex md:gap-x-0.5">
        <MessageNavigationMenu menuClassName={"hidden md:flex bg-white py-8 flex-col gap-y-8 px-2"} menuIconArray={menuIconDetails.slice(0, 3)} />
        <div className="h-full md:w-full md:flex md:gap-x-0.5">
          <main className="relative px-3 md:bg-white h-full flex flex-col md:p-4 md:gap-y-4 md:w-2/5 lg:w-[30%] md:shrink-0 overflow-y-hidden">
            <MessageMobileStatus />
            <div className="hidden md:flex flex-col gap-y-4 pb-4 border-b-2 border-background-gray">
              <section className="flex justify-between items-center gap-x-4">
                <h1 className="text-heading-black">Chats</h1>
                <MessageChatSearch/>
              </section>
              <MessageTabs tabContainerClassName={"gap-x-2"} tablistClassName={"p-1.5 bg-background-gray text-charcoal-black gap-x-2 rounded-md"} tabClassName={"w-17.5 flex-none py-1.5 text-center rounded-md font-medium text-xs tracking-wider cursor-pointer capitalize"} activeTabClassName={"bg-white"} plusIconClassName={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer shrink-0`} />
            </div>
            <MessageSection />
            {currentTabId === 2 && <div className={"absolute bottom-4 right-4 cursor-pointer shadow-lg p-4 bg-periwinkle-purple rounded-full w-16 h-16 flex justify-center items-center"}><Users size={24} className={"text-white"}/></div>}
          </main>
          <Routes>
            <Route path="/" element={
              <div className="hidden md:flex items-center justify-center w-full h-full">
                <p className="text-charcoal-black md:text-2xl lg:text-4xl">Hello, welcome to FreeChat</p>
              </div>
            }/>
            {!mobile && <Route path=":uid" element={<MutualPage />} />}
          </Routes>
        </div>
      </section>
      {showUserProfileModal && <MessageMobileProfileModal />}
      <footer className="w-full md:hidden">
        <MessageNavigationMenu menuClassName={"h-fit w-full mt-auto py-3 px-5 flex justify-between border-t border-input-gray bg-white/70 backdrop-blur-md"} menuIconNotShownId={2} menuIconArray={menuIconDetails} />
      </footer>
    </section>
  );
}

MessagePage.propTypes = {
  mobile: PropTypes.bool.isRequired,
}
