import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import {useGetLastMessages} from "../../hooks/useGetLastMessages.js";

export default function MessageSection() {
  const navigate = useNavigate();
  const { tablist, currentTabId } = useSelector((state) => state.messageUI);
  const roomsCreated = useSelector((state) => state.rooms);
  const getUnreadMessagesDetails = useGetLastMessages();

  return (
    <section id={"message-user-group-filter-section"} aria-labelledby={tablist.find(({ id }) => id === currentTabId).tabId} role={"tabpanel"} tabIndex={0} className="flex flex-col pt-4 mt-1 pb-6 md:mt-0 md:p-0 gap-y-4 md:gap-y-5 lg:gap-y-6 overflow-y-auto no-scrollbar">
      {roomsCreated.uids.map((uid) => {
        const { uid: userId, profile, name, unreadMessages } = { ...(roomsCreated["rooms"][uid]), name: roomsCreated["rooms"][uid]["roomType"] === "user" ? `${roomsCreated["rooms"][uid]["fullName"]["firstname"]} ${roomsCreated["rooms"][uid]["fullName"]["lastname"]}` : roomsCreated["rooms"][uid]["groupName"], unreadMessages: getUnreadMessagesDetails(uid) }

        return (
          <div key={userId} role={"button"} tabIndex={0} className="flex gap-x-2 justify-between cursor-pointer" onClick={() => navigate(`/messages/${userId}`)}>
            <div className="flex gap-x-2 items-center">
              <img src={`${profile}`} className="w-10 h-10 md:w-11 md:h-11 rounded-full" alt="User Profile" />
              <div className="flex flex-col gap-y-0.5">
                <h3 className="capitalize font-medium text-charcoal-black text-xs md:text-sm">{name}</h3>
                <p className="text-light-gray text-[10px] md:text-xs line-clamp-1">{unreadMessages["lastMessage"]}</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-1 items-end">
              <time dateTime="19:30" className="text-light-gray text-xs text-nowrap">{unreadMessages["time"]}</time>
              {unreadMessages["unreadCount"] ? <div aria-live={"polite"} className="bg-periwinkle-purple w-2.5 h-2.5 text-[6px] md:w-3.5 md:h-3.5 md:text-[8px] flex justify-center items-center text-white rounded-full">{unreadMessages["unreadCount"]}</div> : ""}
            </div>
          </div>
        );
      })}
    </section>
  );
}