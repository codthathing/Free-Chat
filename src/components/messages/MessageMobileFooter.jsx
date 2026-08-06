import MessageMobileProfileModal from "./MessageMobileProfileModal.jsx";
import {useDispatch, useSelector} from "react-redux";
import {updateUserProfileModal} from "../../store/store.js";

export default function MessageMobileFooter() {
  const { menuIconDetails, showUserProfileModal } = useSelector((state) => state.messageUI);
  const dispatch = useDispatch();

  return (
    <>
      {showUserProfileModal && <MessageMobileProfileModal />}
      <footer className="w-full md:hidden">
        <div role={"tablist"} className="h-fit w-full mt-auto py-3 px-5 flex justify-between border-t border-input-gray bg-white/70 backdrop-blur-md">
          {menuIconDetails.map(({ id, Icon, iconText }) => {
            if (id !== 2) {
              return (
                <div key={id} {...(iconText === "profile" && { onClick: () => dispatch(updateUserProfileModal(true)), role: "button", "aria-controls": "mobile-user-profile-section", tabIndex: 0, "aria-expanded": showUserProfileModal, id: "mobile-user-profile-button" })} className="flex flex-col items-center w-fit h-fit gap-y-0.5">
                  <Icon size={18} className={`${"messages" === iconText ? "text-periwinkle-purple" : "text-medium-gray"}`} />
                  <p className={`text-[8px] ${"messages" === iconText ? "text-periwinkle-purple" : "text-medium-gray"} capitalize`}>{iconText}</p>
                </div>
              );
            }
          })}
        </div>
      </footer>
    </>
  );
}
