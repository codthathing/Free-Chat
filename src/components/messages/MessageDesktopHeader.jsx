import MessageChatSearch from "./MessageChatSearch";

export default function MessageDesktopHeader() {
  return (
    <div className="hidden md:flex flex-col gap-y-4 pb-4 border-b-2 border-[#F2F2F2]">
      <section className="flex justify-between items-center gap-x-4">
        <h1>Chats</h1>
        <MessageChatSearch />
      </section>
      <section className="p-1.5 bg-[#F2F2F2] flex justify-between rounded-md">
        <span className="capitalize bg-white py-2 w-full text-center rounded-md font-[500] text-xs tracking-wider cursor-pointer">inbox</span>
        <span className="capitalize py-2 w-full text-center rounded-md font-[500] text-xs tracking-wider cursor-pointer">unread</span>
      </section>
    </div>
  );
}
