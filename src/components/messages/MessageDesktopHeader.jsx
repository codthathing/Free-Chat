import MessageChatSearch from "./MessageChatSearch";
import {Plus} from "lucide-react";
import PropTypes from "prop-types";

const tabList = [
  { id: 0, text: "inbox" },
  { id: 1, text: "unread" },
  { id: 2, text: "groups" },
];

export default function MessageDesktopHeader({ tab, setTab }) {
  return (
    <div className="hidden md:flex flex-col gap-y-4 pb-4 border-b-2 border-background-gray">
      <section className="flex justify-between items-center gap-x-4">
        <h1 className="text-heading-black">Chats</h1>
        <MessageChatSearch/>
      </section>
      <section className="p-1.5 bg-background-gray text-charcoal-black flex items-center gap-x-2 no-scrollbar overflow-x-auto snap-x scroll-smooth w-full rounded-md">
        {tabList.map(({id, text}) => <div key={id} onClick={() => setTab(id)} className={`${tab === id ? "bg-white" : ""} w-30 flex-none capitalize py-2 text-center rounded-md font-medium text-xs tracking-wider cursor-pointer`}>{text}</div>)}
        <div onClick={() => setTab(3)} className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${tab === 3 ? "bg-white" : ""} shrink-0`}><Plus size={14} className={""} /></div>
      </section>
    </div>
  );
}

MessageDesktopHeader.propTypes = {
  setTab: PropTypes.func.isRequired,
  tab: PropTypes.number.isRequired,
}