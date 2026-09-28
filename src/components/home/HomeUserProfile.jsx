import { Bell, ChevronDown } from "lucide-react";
import display_picture from "../../../public/display-picture.jpg";
import HomeDesktopProfileModal from "./HomeDesktopProfileModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import {toggleUserProfileModal} from "../../store/store.js";
import {useNavigate} from "react-router-dom";

export default function HomeUserProfile() {
  const { showUserProfileModal } = useSelector((state) => state.messageUI);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex gap-x-6 md:gap-x-5 lg:gap-x-4 items-center">
        <Bell onClick={() => navigate("/notifications")} size={20} className="text-medium-gray cursor-pointer hidden md:block" />
        <div className="flex gap-x-1.5 items-center" onClick={() => dispatch(toggleUserProfileModal())}>
          <img src={`${display_picture}`} alt={"Profile Picture"} className="w-8 h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 rounded-full" />
          <div className="hidden lg:flex gap-x-1 items-center cursor-pointer">
            <span className="text-xs text-charcoal-black">Me</span>
            <ChevronDown size={10} className="text-medium-gray" />
          </div>
        </div>
      </div>
      {showUserProfileModal && <HomeDesktopProfileModal />}
    </>
  );
}
