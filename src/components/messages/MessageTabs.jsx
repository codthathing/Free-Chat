import {updateCurrentTabId} from "../../store/store.js";
import {Plus} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";

export default function MessageTabs({ tabContainerId="", tabContainerClassName, tablistClassName, tabClassName, activeTabClassName, inActiveTabClassName, plusIconClassName }) {
  const { tablist, currentTabId } = useSelector((state) => state.messageUI);
  const dispatch = useDispatch();

  return (
    <div id={tabContainerId} className={`${tabContainerClassName} flex items-center`}>
      <div role={"tablist"} className={`flex snap-x snap-mandatory scroll-smooth overflow-x-auto no-scrollbar ${tablistClassName}`}>{tablist.map(({ id, text, tabId }) => <div key={id} role={"tab"} tabIndex={currentTabId === id ? 0 : -1} id={tabId} aria-controls={"message-user-group-filter-section"} aria-selected={currentTabId === id} onClick={() => dispatch(updateCurrentTabId(id))} className={`${currentTabId === id ? activeTabClassName : inActiveTabClassName} ${tabClassName} snap-center shrink-0`}>{text}</div>)}</div>
      <div role={"button"} aria-label={"Create User/Group Filter"} tabIndex={0} className={plusIconClassName}><Plus size={16} /></div>
    </div>
  );
}

MessageTabs.propTypes = {
  tabContainerId: PropTypes.string,
  tabContainerClassName: PropTypes.string.isRequired,
  tablistClassName: PropTypes.string.isRequired,
  tabClassName: PropTypes.string.isRequired,
  activeTabClassName: PropTypes.string.isRequired,
  inActiveTabClassName: PropTypes.string,
  plusIconClassName: PropTypes.string.isRequired,
}