import { Plus, SendHorizonal, Mic } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../store/messageSlice";

export default function MutualFooter() {
  const [messageInput, setMessageInput] = useState("");
  const dispatch = useDispatch();

  const messageSendButton = () => {
    if (!messageInput.trim()) return;

    const presentTime = `${new Date().getHours() >= 12 ? new Date().getHours() % 12 : new Date().getHours()}:${new Date().getMinutes().toString().padStart(2, "0")} ${new Date().getHours() >= 12 ? "PM" : "AM"}`;

    dispatch(addMessage({ id: Date.now(), type: "user", text: messageInput, time: presentTime }));
    setMessageInput("");
  };

  const isMobile = navigator.userAgentData ? navigator.userAgentData.mobile : /Mobi|Android/i.test(navigator.userAgent);
  const keyDownEnter = (event) => {
    if (event.shiftKey && event.key === "Enter") {
      return;
    } else if (event.key === "Enter") {
      if (isMobile) {
        return;
      } else {
        event.preventDefault();
        messageSendButton();
      }
    }
  };

  return (
    <footer className="px-4 h-[6.5rem] md:h-36 flex items-center md:bg-white">
      <div className="flex gap-x-3 w-full">
        <div className="h-10 w-10 rounded-full bg-[#6664FE] flex items-center justify-center cursor-pointer flex-shrink-0">
          <Plus className="text-white" size={20} />
        </div>
        <form className="h-20 lg:h-28 w-full box-border px-2 md:px-4 rounded-xl md:rounded-2xl bg-[#F8F8F8] flex gap-x-4">
          <textarea placeholder="Type Here..." onKeyDown={keyDownEnter} value={messageInput} onChange={(e) => setMessageInput(e.target.value)} className="placeholder:text-[#B7B7B7] resize-none custom-scrollbar self-center h-16 md:h-20 tracking-wider bg-inherit w-full text-[10px] font-thin outline-none" />
          <button type="submit" onClick={(e) => e.preventDefault()} className="border-none outline-none bg-none self-end mb-2 md:mb-4 cursor-pointer">
            {messageInput ? <SendHorizonal onClick={() => messageSendButton()} size={20} /> : <Mic size={20} />}
          </button>
        </form>
      </div>
    </footer>
  );
}
