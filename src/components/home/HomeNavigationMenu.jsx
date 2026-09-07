import {useDispatch, useSelector} from "react-redux";
import {Bell, MessageCircle, PhoneCall, Target, User} from "lucide-react";
import {updateUserProfileModal} from "../../store/store.js";
import PropTypes from "prop-types";
import {useLocation, useNavigate} from "react-router-dom";

/*** @param {{ menuClassName: string, menuIconnNotShownId: number, menuIconArray: { id: number, iconKey: string, iconText: string }[] }} props */

const ICON_MAP = { "message-circle": MessageCircle,  "phone-call": PhoneCall,  target: Target,  bell: Bell,  user: User };

export default function HomeNavigationMenu({ menuClassName, menuIconNotShownId, menuIconArray }) {
  const dispatch = useDispatch();
  const { showUserProfileModal } = useSelector((state) => state.messageUI);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  return (
    <div role={"menu"} className={menuClassName}>
      {menuIconArray.map(({ id, iconKey, iconText, path }) => {
        if (menuIconNotShownId && id === menuIconNotShownId) return;

        const Icon = ICON_MAP[iconKey];

        return (
          <div
            key={`${id}`}
            role={"menuitem"}
            className={`${pathname === path ? "text-periwinkle-purple" : "text-medium-gray"} cursor-pointer flex flex-col items-center gap-y-0.5`}
            {...(iconText === "profile" ? { onClick: () => dispatch(updateUserProfileModal(true)),
              role: "button",
              "aria-controls": "mobile-user-profile-section",
              tabIndex: 0,
              "aria-expanded": showUserProfileModal,
              id: "mobile-user-profile-button"
            } : { onClick: () => navigate(path), role: "link" })
          }>
            <Icon size={20} />
            <p className={`capitalize text-xs`}>{iconText}</p>
          </div>
        );
      })}
    </div>
  )
}

HomeNavigationMenu.propTypes = {
  menuClassName: PropTypes.string.isRequired,
  menuIconNotShownId: PropTypes.number,
  menuIconArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      iconKey: PropTypes.string.isRequired,
      iconText: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ).isRequired,
}