import MessageChatSearch from "./MessageChatSearch.jsx";
import { useSelector} from "react-redux";
import MessageTabs from "./MessageTabs.jsx";

export default function MessageMobileHeader() {
  const { showTabOptions } = useSelector((state) => state.messageUI);

  return (
    <section className="flex flex-col gap-y-2 md:hidden">
      <MessageChatSearch />
      {showTabOptions && <MessageTabs tabContainerClassName={"gap-x-3.5"} tablistClassName={"gap-x-3.5"} tabClassName={"rounded-2xl w-24 flex-none py-1 flex items-center justify-center cursor-pointer capitalize"} activeTabClassName={"bg-charcoal-black text-white"}  inActiveTabClassName={"border border-light-gray"} plusIconClassName={`border border-light-gray w-7 h-7 flex-none shrink-0 rounded-full flex items-center justify-center capitalize`} />}
    </section>
  )
}