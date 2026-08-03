import { Plus } from "lucide-react";
import display_picture from "../../assets/display-picture.jpg";

export default function MessageUserStatus() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img src={`${display_picture}`} className="w-10 h-10 rounded-full mb-0.5 border border-periwinkle-purple p-px" alt="Display Picture" />
        <div className="bg-periwinkle-purple absolute right-0 bottom-0.5 w-3.5 h-3.5 flex items-center justify-center rounded-full border border-input-gray">
          <Plus size={12} className="text-white" />
        </div>
      </div>
      <p className="text-xs capitalize text-charcoal-black font-medium">My Status</p>
    </div>
  );
}
