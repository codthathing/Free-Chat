import { Plus, SendHorizonal, Mic } from "lucide-react";
import { useState } from "react";

export default function MutualFooter() {
  const [messageInput, setMessageInput] = useState("");

  return (
    <footer className="px-4 h-[6.5rem] md:h-36 flex items-center md:bg-white">
      <div className="flex gap-x-3 w-full">
        <div className="h-10 w-10 rounded-full bg-[#6664FE] flex items-center justify-center cursor-pointer flex-shrink-0">
          <Plus className="text-white" size={20} />
        </div>
        <div className="h-20 lg:h-28 w-full box-border px-2 md:px-4 rounded-xl md:rounded-2xl bg-[#F8F8F8] flex gap-x-4">
          <textarea placeholder="Type Here..." value={messageInput} onChange={(e) => setMessageInput(e.target.value)} className="placeholder:text-[#B7B7B7] resize-none custom-scrollbar self-center h-16 md:h-20 tracking-wider bg-inherit w-full text-[10px] font-thin outline-none" />
          <span className="self-end mb-2 md:mb-4 cursor-pointer">{false ? <SendHorizonal size={20} /> : <Mic size={20} />}</span>
        </div>
      </div>
    </footer>
  );
}
