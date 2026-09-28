import {Heart, Plus, Users, X} from "lucide-react";
import {selectAllStatus, selectEntitiesRooms} from "../../store/store.js";
import {useSelector} from "react-redux";
import {useGetRoomDetails} from "../../hooks/useGetRoomDetails.js";
import {Route, Routes, useNavigate} from "react-router-dom";
import StatusViewerSection from "./StatusViewerSection.jsx";

export default function StatusSection() {
  const statusUpdates = useSelector(selectAllStatus);
  const user = useSelector((state) => state.user);
  const roomsEntities = useSelector(selectEntitiesRooms);
  const getRoomDetails = useGetRoomDetails();
  const navigate = useNavigate();

  const {id: currentUserId, profile: currentUserProfile} = user;

  return (
    <>
      <section className={"flex-1 overflow-hidden grid md:grid-cols-2 lg:grid-cols-[30%_70%] w-full"}>
        <div className={"bg-white px-4 py-6 md:px-5 md:py-7 lg:px-6 lg:py-8 flex flex-col gap-y-1.5 md:gap-y-2 lg:gap-y-2.5 overflow-y-auto no-scrollbar"}>
          {statusUpdates.map(({ id }) => {
            const { id: userId, type, profile, saved, name } = (id === currentUserId) ? {id: currentUserId, type: "user", profile: currentUserProfile, saved: true, name: "My Status"} : getRoomDetails(roomsEntities[id], false);

            return (
              <div key={userId} onClick={() => navigate(`/status/${userId}`)} className={"flex flex-col gap-y-4 pb-1.5 md:gap-y-5 md:pb-2 lg:gap-y-6 lg:pb-2.5 first:pb-0 first:border-none last:border-none border-b border-background-gray"}>
                <div className="flex items-center gap-x-2 md:gap-x-2.5 cursor-pointer">
                  <div className="relative">
                    <img src={profile} className={`w-10 h-10 rounded-full mb-0.5 border border-periwinkle-purple p-0.5`} alt="Display Picture" />
                    {userId === currentUserId && <div className="bg-periwinkle-purple absolute right-0 bottom-0.5 w-3.5 h-3.5 flex items-center justify-center rounded-full border border-input-gray"><Plus size={12} className="text-white"/></div>}
                  </div>
                  <div className={"flex flex-col"}>
                    <p className={`text-sm md:text-base lg:text-sm text-charcoal-black ${saved ? "capitalize font-semibold" : "italic font-light"} flex items-center gap-x-1`}><span className={"text-charcoal-black"}>{name}</span><span className={"text-medium-gray"}>{type === "group" && <Users size={10} />}</span></p>
                    <span className={"text-medium-gray text-xs md:text-sm lg:text-xs"}>{userId === currentUserId ? "Tap to add status update" : "45m ago"}</span>
                  </div>
                </div>
                {userId === currentUserId && <p className={"capitalize text-medium-gray text-xs md:text-base lg:text-sm"}>recent update</p>}
              </div>
            );
          })}
        </div>
        <div className={"hidden md:block bg-black md:py-15 lg:py-20"}>
          <div className={"bg-[url('/status-sunrise.jpg')] bg-no-repeat bg-cover bg-center h-full md:w-3/5 lg:w-2/5 rounded-3xl mx-auto overflow-hidden"}></div>
        </div>
      </section>
      <Routes>
        <Route path={":uid"} element={<StatusViewerSection />}/>
      </Routes>
    </>
  )
}