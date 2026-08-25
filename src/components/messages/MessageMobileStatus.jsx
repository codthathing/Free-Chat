import {Plus, Users} from "lucide-react";
import {useSelector} from "react-redux";
import {useGetRoomDetails} from "../../hooks/useGetRoomDetails.js";
import {selectAllStatus, selectEntitiesRooms} from "../../store/store.js";

export default function MessageMobileStatus() {
  const {user} = useSelector((state) => state.user);
  const statusUpdates = useSelector(selectAllStatus);
  const roomsEntities = useSelector(selectEntitiesRooms);
  const getRoomDetails = useGetRoomDetails();

  if (!user) return null;

  const { id: currentUserId, profile: currentUserProfile } = user;

  return (
    <section className="px-3 pb-4 border-b border-input-gray md:hidden">
      <h3 className="text-medium-gray text-sm mb-3">Recent Update</h3>
      <main className="flex gap-x-3 snap-x snap-mandatory scroll-smooth overflow-x-auto no-scrollbar">
        {statusUpdates.map(({ id }) => {
          const { id: userId, type, profile, saved, name } = (id === currentUserId) ? {id: currentUserId, type: "user", profile: currentUserProfile, saved: true, name: "My Status"} : getRoomDetails(roomsEntities[id], false);

          return (
            <div key={userId} className="flex flex-col items-center snap-center shrink-0">
              <div className="relative">
                <img src={profile} className={`w-10 h-10 rounded-full mb-0.5 border border-periwinkle-purple p-0.5`} alt="Display Picture" />
                {userId === currentUserId && <div className="bg-periwinkle-purple absolute right-0 bottom-0.5 w-3.5 h-3.5 flex items-center justify-center rounded-full border border-input-gray">
                  <Plus size={12} className="text-white"/>
                </div>}
              </div>
              <p className={`text-xs text-charcoal-black ${saved ? "capitalize font-medium" : "italic font-light"} flex items-center gap-x-1`}><span className={"text-charcoal-black shrink-0"}>{name}</span><span className={"text-medium-gray"}>{type === "group" && <Users size={10} />}</span></p>
            </div>
          );
        })}
      </main>
    </section>
  );
}
