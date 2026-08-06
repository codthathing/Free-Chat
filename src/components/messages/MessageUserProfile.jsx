import { Bell, ChevronDown } from "lucide-react";
import display_picture from "../../assets/display-picture.jpg";
import MessageDesktopProfileModal from "./MessageDesktopProfileModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import {toggleUserProfileModal} from "../../store/store.js";

export default function MessageUserProfile() {
  const { showUserProfileModal } = useSelector((state) => state.messageUI);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex gap-x-6 items-center">
        <span className="bg-input-gray p-1.5 rounded-full cursor-pointer hidden md:block">
          <Bell size={16} className="text-medium-gray" />
        </span>
        <div className="flex flex-col gap-y-1 items-center">
          <img src={`${display_picture}`} alt={"Profile Picture"} className="w-8 h-8 rounded-full" />
          <div className="hidden md:flex gap-x-1 items-center cursor-pointer" onClick={() => dispatch(toggleUserProfileModal())}>
            <span className="text-xs text-charcoal-black">Me</span>
            <span className="bg-input-gray p-0.5 rounded-md cursor-pointer">
              <ChevronDown size={10} className="text-medium-gray" />
            </span>
          </div>
        </div>
      </div>
      {showUserProfileModal && <MessageDesktopProfileModal />}
    </>
  );
}
