import MessageChatSearch from "./MessageChatSearch";
import { useState } from "react";

const tabList = [
  { id: 0, text: "inbox" },
  { id: 1, text: "unread" },
  { id: 2, text: "groups" },
];

export default function MessageDesktopHeader(){
  const [currentTabId, setCurrentTabId] = useState(0);

  return (
    <div className="hidden md:flex flex-col gap-y-4 pb-4 border-b-2 border-background-gray">
      <section className="flex justify-between items-center gap-x-4">
        <h1 className="text-heading-black">Chats</h1>
        <MessageChatSearch />
      </section>
      <section className="p-1.5 bg-background-gray text-charcoal-black flex justify-between rounded-md">
        {tabList.map(({ id, text }) => <span key={id} onClick={() => setCurrentTabId(id)} className={`${currentTabId === id ? "bg-white" : ""} capitalize py-2 w-full text-center rounded-md font-medium text-xs tracking-wider cursor-pointer`}>{text}</span>)}
      </section>
    </div>
  );
}
