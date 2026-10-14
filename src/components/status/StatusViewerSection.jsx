import {Heart, Users, X} from "lucide-react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectEntitiesRooms} from "../../store/store.js";
import {useGetRoomDetails} from "../../hooks/useGetRoomDetails.js";

export default function StatusViewerSection() {
  const { uid } = useParams();
  const user = useSelector((state) => state.user);
  const roomsEntities = useSelector(selectEntitiesRooms);
  const getRoomDetails = useGetRoomDetails();
  const navigate = useNavigate();

  const {id: currentUserId, profile: currentUserProfile} = user;

  const { type, profile, saved, name } = (uid === currentUserId) ? {type: "user", profile: currentUserProfile, saved: true, name: "My Status"} : getRoomDetails(roomsEntities[uid], false);

  return (
    <div className={"fixed left-0 top-0 w-full h-dvh bg-black"}>
      <div className={"bg-[url('/status-sunrise.jpg')] bg-no-repeat bg-cover bg-center h-full w-full md:w-4/6 lg:w-2/6 mx-auto flex flex-col justify-between p-2.5 md:p-4"}>
        <section className={"flex flex-col gap-y-3 md:gap-y-4"}>
          <div className={"flex gap-x-1"}>{[0,1,2].map((id) => <div key={id} className={`grow h-1 rounded-xl ${id !== 2 ? "bg-white" : "bg-medium-gray"}`}></div>)}</div>
          <div className={"flex justify-between items-center"}>
            <div className="flex items-center gap-x-2 md:gap-x-2.5 cursor-pointer">
              <img src={profile} className={`w-10 h-10 rounded-full`} alt="Display Picture" />
              <p className={`text-sm md:text-base lg:text-sm text-white ${saved ? "capitalize font-semibold" : "italic font-light"} flex items-center gap-x-1`}><span>{name}</span><span>{type === "group" && <Users size={10} />}</span></p>
              <span className={"text-light-gray/70 text-xs md:text-sm lg:text-xs"}>45m ago</span>
            </div>
            <X onClick={() => navigate(-1)} className={"text-white cursor-pointer size-7.5 font-extrabold md:size-8 lg:size-6"} />
          </div>
        </section>
        <div className={"py-0.5 px-3.5 md:px-5 lg:px-4.5 flex gap-x-2 items-center rounded-full border border-light-gray"}>
          <input type={"text"} name={"comment"} placeholder={"Reply to Adio..."} className={"w-full border-none bg-transparent outline-none py-1.5 md:py-2.5 lg:py-2 text-input-gray text-xs md:text-base lg:text-sm"}/>
          <Heart className={"size-4 md:size-5.5 lg:size-5 text-white"} />
        </div>
      </div>
    </div>
  )
}