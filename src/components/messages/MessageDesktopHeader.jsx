import MessageChatSearch from "./MessageChatSearch";
import MessageTabs from "./MessageTabs.jsx";

export default function MessageDesktopHeader() {
  return (
    <div className="hidden md:flex flex-col gap-y-4 pb-4 border-b-2 border-background-gray">
      <section className="flex justify-between items-center gap-x-4">
        <h1 className="text-heading-black">Chats</h1>
        <MessageChatSearch/>
      </section>
      <MessageTabs tabContainerClassName={"p-1.5 bg-background-gray text-charcoal-black gap-x-2 w-full rounded-md"} tablistClassName={"gap-x-2"} tabClassName={"w-30 flex-none py-2 text-center rounded-md font-medium text-xs tracking-wider cursor-pointer capitalize"} activeTabClassName={"bg-white"} plusIconClassName={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer shrink-0`} />
    </div>
  );
}