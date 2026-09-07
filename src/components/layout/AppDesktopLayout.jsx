import AppLayout from "./AppLayout.jsx";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import HomeNavigationMenu from "../home/HomeNavigationMenu.jsx";
import PropTypes from "prop-types";

export default function AppDesktopLayout({children}) {
  const { menuIconDetails } = useSelector((state) => state.messageUI);

  return (
    <AppLayout>
      <HomeNavigationMenu menuClassName={"hidden md:flex bg-white py-8 flex-col gap-y-8 px-2"} menuIconArray={menuIconDetails.slice(0, 3)} />
      {children}
      <Outlet />
    </AppLayout>
  )
}

AppDesktopLayout.propTypes = {
  children: PropTypes.node,
}