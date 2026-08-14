import MessageMobileStatus from "./MessageMobileStatus.jsx";
import MessageChatSearch from "./MessageChatSearch.jsx";
import MessageTabs from "./MessageTabs.jsx";
import MessageSection from "./MessageSection.jsx";
import {Users} from "lucide-react";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

export default function MessageParallelSections({ children, sections }) {
  const { currentTabId } = useSelector((state) => state.messageUI);

  if (sections) return null;

  return (
    <div className="h-full md:w-full md:flex md:gap-x-0.5">
      <main className="relative md:bg-white h-full flex flex-col md:p-4 md:gap-y-4 md:w-3/5 lg:w-[30%] md:shrink-0 overflow-y-hidden">
        <MessageMobileStatus />
        <div className="hidden md:flex flex-col gap-y-4 pb-4 border-b-2 border-background-gray">
          <section className="flex justify-between items-center gap-x-4">
            <h1 className="text-heading-black">Chats</h1>
            <MessageChatSearch/>
          </section>
          <MessageTabs tabContainerClassName={"gap-x-2"} tablistClassName={"p-1.5 bg-background-gray text-charcoal-black gap-x-2 rounded-md"} tabClassName={"flex-none py-1.5 px-5 text-center rounded-md font-medium text-xs tracking-wider cursor-pointer capitalize"} activeTabClassName={"bg-white"} plusIconClassName={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer shrink-0`} />
        </div>
        <MessageSection />
        {currentTabId === 2 && <div className={"absolute bottom-4 right-4 cursor-pointer shadow-lg p-4 bg-periwinkle-purple rounded-full w-16 h-16 flex justify-center items-center"}><Users size={24} className={"text-white"}/></div>}
      </main>
      {children}
    </div>
  )
}

MessageParallelSections.propTypes = {
  children: PropTypes.node,
  sections: PropTypes.bool.isRequired
}