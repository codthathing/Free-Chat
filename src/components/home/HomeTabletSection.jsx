import PropTypes from "prop-types";
import HomeParallelSections from "./HomeParallelSections.jsx";
import AppDesktopLayout from "../layout/AppDesktopLayout.jsx";

export default function HomeTabletSection({ width, home, children }) {
  return (
    <>
      {((width > 767 && width <1024) && !home) && children}
      {(!home && width > 1023) && <HomeParallelSections sections={width < 1024}>{children}</HomeParallelSections>}
      {home && <AppDesktopLayout><HomeParallelSections sections={width < 768}><div className="hidden md:flex items-center justify-center w-full h-full"><p className="text-charcoal-black md:text-2xl lg:text-4xl">Hello, welcome to FreeChat</p></div></HomeParallelSections></AppDesktopLayout>}
    </>
  );
}

HomeTabletSection.propTypes = {
  width: PropTypes.number.isRequired,
  home: PropTypes.bool.isRequired,
  children: PropTypes.node,
}
