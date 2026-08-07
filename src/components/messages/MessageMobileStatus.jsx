import {Plus} from "lucide-react";
import {useSelector} from "react-redux";

export default function MessageMobileStatus() {
  const statusUpdates = useSelector((state) => state.status);
  const roomsCreated = useSelector((state) => state.rooms);
  const { uid: currentUserId, profile: currentUserProfile } = useSelector((state) => state.user);

  return (
    <section className="border-b border-input-gray pb-4 md:hidden">
      <h3 className="text-medium-gray text-sm mb-3">Recent Update</h3>
      <main className="flex gap-x-3">
        {statusUpdates.uids.map((uid) => {
          const { uid: userId, status, profile, name } = (uid === currentUserId) ? { ...(statusUpdates["status"][uid]), type: "user", profile: currentUserProfile, name: "My Status"  } : { ...statusUpdates["status"][uid], type: roomsCreated["rooms"][uid]["roomType"], profile: roomsCreated["rooms"][uid]["profile"], name: roomsCreated["rooms"][uid]["roomType"] === "user" ? `${roomsCreated["rooms"][uid]["fullName"]["firstname"]} ${roomsCreated["rooms"][uid]["fullName"]["lastname"]}` : roomsCreated["rooms"][uid]["groupName"] };

          return (
            <div key={userId} className="flex flex-col items-center">
              <div className="relative">
                <img src={profile} className={`w-10 h-10 rounded-full mb-0.5 ${status.some(({ seen }) => seen === true) ? "border border-periwinkle-purple p-0.5" : ""}`} alt="Display Picture" />
                {userId === currentUserId && <div className="bg-periwinkle-purple absolute right-0 bottom-0.5 w-3.5 h-3.5 flex items-center justify-center rounded-full border border-input-gray">
                  <Plus size={12} className="text-white"/>
                </div>}
              </div>
              <p className="text-xs capitalize text-charcoal-black font-medium">{name}</p>
            </div>
          );
        })}
      </main>
    </section>
  );
}
