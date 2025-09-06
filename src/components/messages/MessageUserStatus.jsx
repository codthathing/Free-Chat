import { Plus } from "lucide-react";
import display_picture from "../../assets/display-picture.jpg";

export default function MessageUserStatus() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          src={display_picture}
          className="w-10 h-10 rounded-full mb-0.5 border border-[#6664FE] p-[1px]"
          alt="Display Picture"
        />
        <div className="bg-[#6664FE] absolute right-0 bottom-0.5 w-3.5 h-3.5 flex items-center justify-center rounded-full border border-[#F8F8F8]">
          <Plus size={12} className="text-[#E7E6FE]" />
        </div>
      </div>
      <p className="text-xs capitalize text-[#555555] font-[500]">My Status</p>
    </div>
  );
}
