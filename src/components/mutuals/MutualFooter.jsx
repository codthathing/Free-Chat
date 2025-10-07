import { Plus, SendHorizonal, Mic } from "lucide-react";

export default function MutualFooter() {
  return (
    <footer className="p-4 flex items-center gap-x-3 md:bg-white">
      <div className="h-10 w-10 rounded-full bg-[#6664FE] flex items-center justify-center cursor-pointer flex-shrink-0">
        <Plus className="text-white" size={20} />
      </div>
      <div className="h-10 w-full box-border px-4 rounded-3xl bg-[#F8F8F8] flex items-center gap-x-4">
        <input type="text" placeholder="Type Here..." className="placeholder:text-[#B7B7B7] tracking-wider bg-inherit w-full text-[10px] font-thin py-1.5 outline-none" />
        {false ? <SendHorizonal size={20} className="cursor-pointer" /> : <Mic size={20} className="cursor-pointer" />}
      </div>
    </footer>
  );
}
