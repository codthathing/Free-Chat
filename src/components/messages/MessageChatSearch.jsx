import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function MessageChatSearch({ className }) {
  const [searchText, setSearchText] = useState("");

  return (
    <form className={`flex items-center gap-x-4 py-2 px-4 rounded-md w-full border-b-4 border-gray-light bg-[#F8F8F8] ${className}`}>
      <search className="flex items-center gap-x-2 border-r-[0.25px] border-[#E7E7E7] w-full pr-2">
        <Search size={16} className="text-[#B7B7B7]" />
        <input type="search" className="bg-inherit text-xs w-full placeholder:text-[#C8C8C8] outline-none" placeholder="Search chat" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      </search>
      <SlidersHorizontal size={16} className="text-[#5F5F5F] md:hidden" />
    </form>
  );
}
