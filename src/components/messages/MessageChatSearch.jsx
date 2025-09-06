import { Search } from "lucide-react";
import { useState } from "react";

export default function MessageChatSearch() {
  const [searchText, setSearchText] = useState("");

  return (
    <search className="flex items-center gap-x-2 border-r-[0.25px] border-[#E7E7E7] w-full pr-2">
      <Search size={16} className="text-[#B7B7B7]" />
      <input
        type="search"
        className="bg-inherit text-xs w-full text-[#C8C8C8] outline-none"
        placeholder="Search chat"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </search>
  );
}
