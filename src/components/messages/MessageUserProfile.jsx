import { Bell, ChevronDown } from "lucide-react";
import display_picture from "../../assets/display-picture.jpg";

export default function MessageUserProfile() {
  return (
    <div className="flex gap-x-6 items-center">
      <span className="bg-[#F8F8F8] p-1.5 rounded-full cursor-pointer hidden md:block">
        <Bell size={16} className="text-[#5B5B5B]" />
      </span>
      <div className="flex gap-x-2.5 items-center">
        <img src={display_picture} className="w-8 h-8 rounded-full" />
        <div className="flex-col gap-y-1 hidden md:flex">
          <h3 className="capitalize leading-none text-xs">alexander kirk</h3>
          <p className="leading-none text-[8px]">@alexander</p>
        </div>
        <span className="bg-[#F8F8F8] p-0.5 rounded-md cursor-pointer hidden md:block">
          <ChevronDown size={10} className="" />
        </span>
      </div>
    </div>
  );
}
