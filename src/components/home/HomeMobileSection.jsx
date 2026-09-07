import AppLayout from "../layout/AppLayout.jsx";
import {useSelector} from "react-redux";
import HomeChatSearch from "./HomeChatSearch.jsx";
import HomeFilterTabs from "./HomeFilterTabs.jsx";
import HomeParallelSections from "./HomeParallelSections.jsx";
import PropTypes from "prop-types";
import HomeMobileFooter from "./HomeMobileFooter.jsx";

export default function HomeMobileSection({ width }) {
  const { showTabOptions } = useSelector((state) => state.messageUI);

  return (
    <AppLayout
      Header={
        <section className="flex flex-col gap-y-2 md:hidden">
          <HomeChatSearch />
          {showTabOptions && <HomeFilterTabs tabContainerClassName={"gap-x-3.5"} tablistClassName={"gap-x-3.5"} tabClassName={"rounded-2xl flex-none py-1 px-6 flex items-center justify-center cursor-pointer capitalize"} activeTabClassName={"bg-charcoal-black text-white"} inActiveTabClassName={"border border-light-gray"} plusIconClassName={`border border-light-gray w-7 h-7 flex-none shrink-0 rounded-full flex items-center justify-center capitalize`} />}
        </section>
      }
      Footer={<HomeMobileFooter />}
    >
      <HomeParallelSections sections={width > 767} />
    </AppLayout>
  );
}

HomeMobileSection.propTypes = {
  width: PropTypes.number.isRequired,
}