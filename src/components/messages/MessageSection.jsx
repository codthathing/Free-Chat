import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

export default function MessageSection() {
  const navigate = useNavigate();
  const { tablist, currentTabId } = useSelector((state) => state.messageUI);
  const { roomsCreated } = useSelector((state) => state.rooms);

  return (
    <section id={"message-user-group-filter-section"} aria-labelledby={tablist.find(({ id }) => id === currentTabId).tabId} role={"tabpanel"} tabIndex={0} className="flex flex-col pt-1 mt-1 pb-16 md:mt-0 md:p-0 gap-y-2.5 md:gap-y-4 overflow-y-auto no-scrollbar">
      {roomsCreated["uids"].map((uid) => {
        const { uid: userId, profile, name, unreadMessages } = { ...(roomsCreated["rooms"][uid]), name: roomsCreated["rooms"][uid]["roomType"] === "user" ? `${roomsCreated["rooms"][uid]["fullName"]["firstname"]} ${roomsCreated["rooms"][uid]["fullName"]["lastname"]}` : roomsCreated["rooms"][uid]["groupName"] }

        return (
          <div key={userId} role={"button"} tabIndex={0} className="flex gap-x-2 justify-between cursor-pointer" onClick={() => navigate(`/messages/${name.toLowerCase()}`)}>
            <div className="flex gap-x-2 items-center">
              <img src={`${profile}`} className="w-10 h-10 rounded-full" alt="User Profile" />
              <div className="flex flex-col gap-y-1">
                <h3 className="capitalize font-medium text-charcoal-black text-xs">{name}</h3>
                {/* text-[#7771ff] */}
                <p className="text-light-gray text-[8px] line-clamp-1">{unreadMessages["lastMessage"]}</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-1 items-end">
              <time dateTime="19:30" className="text-light-gray text-xs text-nowrap">{unreadMessages["time"]}</time>
              <div aria-live={"polite"} className="bg-periwinkle-purple w-2.5 h-2.5 text-[6px] flex justify-center items-center text-white rounded-full">{unreadMessages["count"]}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
}