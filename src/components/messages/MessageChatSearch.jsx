import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function MessageChatSearch({ className }) {
  const [searchText, setSearchText] = useState("");

  return (
    <form className={`flex items-center gap-x-4 py-2 px-4 rounded-md has-[input:focus]:border-charcoal-black w-full border-b-4 border-soft-lavender bg-input-gray ${className}`}>
      <search className="flex items-center gap-x-2 border-r border-soft-lavender w-full pr-2">
        <Search size={16} className="text-medium-gray" />
        <input type="search" className="bg-inherit text-xs w-full placeholder:text-medium-gray text-charcoal-black outline-none" placeholder="Search chat" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      </search>
      <SlidersHorizontal size={16} className="text-medium-gray md:hidden" />
    </form>
  );
}
