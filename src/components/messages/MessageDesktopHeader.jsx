import MessageChatSearch from "./MessageChatSearch";

export default function MessageDesktopHeader() {
  return (
    <div className="hidden md:flex flex-col gap-y-4 pb-4 border-b-2 border-background-gray">
      <section className="flex justify-between items-center gap-x-4">
        <h1 className="text-heading-black">Chats</h1>
        <MessageChatSearch />
      </section>
      <section className="p-1.5 bg-background-gray text-charcoal-black flex justify-between rounded-md">
        <span className="capitalize bg-white py-2 w-full text-center rounded-md font-medium text-xs tracking-wider cursor-pointer">inbox</span>
        <span className="capitalize py-2 w-full text-center rounded-md font-medium text-xs tracking-wider cursor-pointer">unread</span>
      </section>
    </div>
  );
}
