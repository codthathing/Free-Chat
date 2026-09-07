import {useSelector} from "react-redux";
import HomeMobileProfileModal from "./HomeMobileProfileModal.jsx";
import HomeNavigationMenu from "./HomeNavigationMenu.jsx";

export default function HomeMobileFooter() {
  const { menuIconDetails, showUserProfileModal } = useSelector((state) => state.messageUI);

  return (
    <>
      {showUserProfileModal && <HomeMobileProfileModal />}
      <footer className="w-full md:hidden">
        <HomeNavigationMenu menuClassName={"h-fit w-full mt-auto py-3 px-5 flex justify-between border-t border-input-gray bg-white/70 backdrop-blur-md"} menuIconNotShownId={2} menuIconArray={menuIconDetails} />
      </footer>
    </>
  )
}