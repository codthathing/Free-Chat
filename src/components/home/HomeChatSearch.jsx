import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleTabContainer} from "../../store/store.js";

export default function HomeChatSearch() {
  const [searchText, setSearchText] = useState("");
  const { showTabOptions } = useSelector((state) => state.messageUI);
  const dispatch = useDispatch();

  return (
    <form className={`flex items-center gap-x-4 py-2 px-4 rounded-md has-[input:focus]:border-charcoal-black w-full border-b-4 border-soft-lavender bg-input-gray`}>
      <search className="flex items-center gap-x-2 border-r border-soft-lavender w-full pr-2">
        <Search role={"button"} tabIndex={0} aria-label={"Confirm Search"} aria-controls={"message-search-input"} size={16} className="text-medium-gray" />
        <input type="search" id={"message-search-input"} className="bg-inherit text-xs w-full placeholder:text-medium-gray text-charcoal-black outline-none" placeholder="Search chat" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      </search>
      <SlidersHorizontal role={"button"} aria-label={"Toggle Filters"} aria-expanded={showTabOptions} aria-controls={"message-tab-container"} onClick={() => dispatch(toggleTabContainer())} size={16} className="text-medium-gray md:hidden" />
    </form>
  );
}
