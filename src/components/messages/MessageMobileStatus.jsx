import {Plus, Users} from "lucide-react";
import {useSelector} from "react-redux";
import {useGetRoomName} from "../../hooks/useGetRoomName.js";

export default function MessageMobileStatus() {
  const user = useSelector((state) => state?.user);
  const statusUpdates = useSelector((state) => state.status);
  const roomsCreated = useSelector((state) => state.rooms);
  const getRoomName = useGetRoomName();

  if (!user) return;

  const { id: currentUserId, profile: currentUserProfile } = user;

  return (
    <section className="px-3 pb-4 border-b border-input-gray md:hidden">
      <h3 className="text-medium-gray text-sm mb-3">Recent Update</h3>
      <main className="flex gap-x-3 snap-x snap-mandatory scroll-smooth overflow-x-auto no-scrollbar">
        {(statusUpdates.uids ?? []).map((uid) => {
          const { uid: userId, type, status, profile, saved, name } = (uid === currentUserId) ? { ...(statusUpdates["status"][uid]), type: "user", profile: currentUserProfile, name: "My Status"  } : { ...statusUpdates["status"][uid], type: roomsCreated["rooms"][uid]["roomType"], profile: roomsCreated["rooms"][uid]["profile"], saved: Boolean(roomsCreated["rooms"][uid]["username"]), name: getRoomName(uid) };

          return (
            <div key={userId} className="flex flex-col items-center snap-center shrink-0">
              <div className="relative">
                <img src={profile} className={`w-10 h-10 rounded-full mb-0.5 ${status.some(({ seen }) => seen === true) ? "border border-periwinkle-purple p-0.5" : ""}`} alt="Display Picture" />
                {userId === currentUserId && <div className="bg-periwinkle-purple absolute right-0 bottom-0.5 w-3.5 h-3.5 flex items-center justify-center rounded-full border border-input-gray">
                  <Plus size={12} className="text-white"/>
                </div>}
              </div>
              <p className={`text-xs text-charcoal-black ${saved ? "italic font-light" : "capitalize font-medium"} flex items-center gap-x-1`}><span className={"text-charcoal-black shrink-0"}>{name}</span><span className={"text-medium-gray"}>{type === "group" && <Users size={10} />}</span></p>
            </div>
          );
        })}
      </main>
    </section>
  );
}
