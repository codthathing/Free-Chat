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
import MessageParallelSections from "../components/messages/MessageParallelSections.jsx";
import MessageTabletParallelSections from "../components/messages/MessageTabletParallelSections.jsx";

export default function MessagePage({ width }) {
  const { showUserProfileModal, menuIconDetails, showTabOptions } = useSelector((state) => state.messageUI);

  return (
    <section className="h-dvh flex flex-col md:gap-y-0.5 md:bg-background-gray md:p-1">
      <header className="relative flex flex-col gap-y-4 px-3 py-6 w-full md:p-6 md:bg-white">
        <div className="flex md:gap-x-10 justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider text-heading-black">FreeChat</h1>
          <MessageUserProfile />
        </div>
        <section className="flex flex-col gap-y-2 md:hidden">
          <MessageChatSearch />
          {showTabOptions && <MessageTabs tabContainerClassName={"gap-x-3.5"} tablistClassName={"gap-x-3.5"} tabClassName={"rounded-2xl flex-none py-1 px-6 flex items-center justify-center cursor-pointer capitalize"} activeTabClassName={"bg-charcoal-black text-white"}  inActiveTabClassName={"border border-light-gray"} plusIconClassName={`border border-light-gray w-7 h-7 flex-none shrink-0 rounded-full flex items-center justify-center capitalize`} />}
        </section>
      </header>
      <section className="flex-1 overflow-hidden md:flex md:gap-x-0.5">
        <MessageNavigationMenu menuClassName={"hidden md:flex bg-white py-8 flex-col gap-y-8 px-2"} menuIconArray={menuIconDetails.slice(0, 3)} />
        <MessageParallelSections sections={width > 767} />
        <MessageTabletParallelSections width={width} />
        <MessageParallelSections sections={width < 1024}>
          <Routes>
            <Route path="/" element={<div className="hidden md:flex items-center justify-center w-full h-full"><p className="text-charcoal-black md:text-2xl lg:text-4xl">Hello, welcome to FreeChat</p></div>}/>
            <Route path=":uid" element={<MutualPage />} />
          </Routes>
        </MessageParallelSections>
      </section>
      {showUserProfileModal && <MessageMobileProfileModal />}
      <footer className="w-full md:hidden">
        <MessageNavigationMenu menuClassName={"h-fit w-full mt-auto py-3 px-5 flex justify-between border-t border-input-gray bg-white/70 backdrop-blur-md"} menuIconNotShownId={2} menuIconArray={menuIconDetails} />
      </footer>
    </section>
  );
}

MessagePage.propTypes = {
  width: PropTypes.number.isRequired,
}
