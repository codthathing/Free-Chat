import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import {useGetRoomDetails} from "../../hooks/useGetRoomDetails.js";
import {Users, CheckCheck} from "lucide-react";
import {selectAllRooms} from "../../store/store.js";

export default function HomeMessageSection() {
  const navigate = useNavigate();
  const { tablist, currentTabId } = useSelector((state) => state.messageUI);
  const getRoomDetails = useGetRoomDetails();
  const roomsCreated = useSelector(selectAllRooms);

  return (
    <section id={"message-user-group-filter-section"} aria-labelledby={tablist.find(({ id }) => id === currentTabId).tabId} role={"tabpanel"} tabIndex={0} className="flex flex-col pt-4 pb-6 px-3 md:mt-0 md:p-0 gap-y-4 md:gap-y-5 lg:gap-y-6 overflow-y-auto no-scrollbar">
      {roomsCreated.map((room) => {
        const { id: roomId, type, profile, name, saved, unreadMessages } = getRoomDetails(room);


        return (
          <div key={roomId} role={"button"} tabIndex={0} className="flex gap-x-2 justify-between cursor-pointer" onClick={() => navigate(`/room/${roomId}`)}>
            <div className="flex gap-x-2 items-center">
              <img src={`${profile}`} className="w-10 h-10 md:w-11 md:h-11 rounded-full" alt="User Profile" />
              <div className="flex flex-col gap-y-0.5">
                <h3 className={`${saved ? "capitalize font-medium" : "font-light italic" } text-xs md:text-sm flex items-center gap-x-1`}><span className={"text-charcoal-black"}>{name}</span><span className={"text-medium-gray"}>{type === "group" && <Users size={10} />}</span></h3>
                <p className="text-light-gray text-[10px] md:text-xs flex items-center"><span>{unreadMessages["seen"] === "check-check" ? <CheckCheck size={10} className={"mr-1"} /> : ""}</span><span className={" line-clamp-1"}>{`${unreadMessages["name"] ? `${unreadMessages["name"]}: ` : ""}${unreadMessages["lastMessage"]}`}</span></p>
              </div>
            </div>
            <div className="flex flex-col gap-y-1 items-end">
              <time dateTime="19:30" className="text-light-gray text-xs text-nowrap">{unreadMessages["time"]}</time>
              {/*{unreadMessages["unreadCount"] ? <div aria-live={"polite"} className="bg-periwinkle-purple w-2.5 h-2.5 text-[6px] md:w-3.5 md:h-3.5 md:text-[8px] flex justify-center items-center text-white rounded-full">{unreadMessages["unreadCount"]}</div> : ""}*/}
            </div>
          </div>
        );
      })}
    </section>
  );
}