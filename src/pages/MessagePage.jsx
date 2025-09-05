import { Camera, Edit, MessageCircle, Plus, Search, SlidersHorizontal } from "lucide-react";
import display_picture from "../assets/display-picture.jpg";

function MessagePage() {
  return (
    <section>
      <header className="grid gap-y-3.5 px-3 pt-4 pb-5 w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-xl font-bold tracking-wider text-[#2B2B2B]">
            Messages
          </h1>
          <div className="flex gap-x-4">
            <span className="bg-[#F8F8F8] p-1.5 rounded-full">
              <Camera size={16} className="text-[#5B5B5B]" />
            </span>
            <span className="bg-[#F8F8F8] p-1.5 rounded-full">
              <Edit size={16} className="text-[#5B5B5B]" />
            </span>
          </div>
        </div>
        <form className="flex items-center gap-x-4 py-2 px-4 rounded-2xl bg-[#F8F8F8]">
          <search className="flex items-center gap-x-2 border-r-[0.25px] border-[#E7E7E7] w-full pr-2">
            <Search size={16} className="text-[#B7B7B7]" />
            <input
              type="search"
              className="bg-inherit text-xs w-full text-[#C8C8C8] outline-none"
              placeholder="Search chat"
              name=""
              id=""
            />
          </search>
          <SlidersHorizontal size={16} className="text-[#5F5F5F]" />
        </form>
      </header>
      <main className="px-3">
        <section className="border-b border-[#F8F8F8] pb-4">
          <h3 className="text-[#C2C2C2] text-sm mb-3">Recent Update</h3>
          <main className="flex gap-x-3">
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
              <p className="text-xs capitalize text-[#555555] font-[500]">
                My Status
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={display_picture}
                className="w-10 h-10 rounded-full mb-0.5 border border-[#F8F8F8] p-[1px]"
                alt="Display Picture"
              />
              <p className="text-xs capitalize text-[#555555] font-[500]">
                Segun
              </p>
            </div>
          </main>
        </section>
        <section className="flex flex-col py-1.5 gap-y-2.5">
          <div className="flex items-center justify-between">
            <main className="flex gap-x-2 items-center">
              <img src={display_picture} className="w-10 h-10 rounded-full" alt="User Profile" />
              <div className="flex flex-col gap-y-1">
                <h3 className="capitalize font-[500] text-[#2b2b2b] text-xs">john doe</h3>
                <p className="text-[#7771ff] text-[8px]">This user is typing...</p>
              </div>
            </main>
            <div className="flex flex-col gap-y-1 items-end">
              <time dateTime="19:30" className="text-[#d4d4d4] text-xs">19:30 PM</time>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <main className="flex gap-x-2 items-center">
              <img src={display_picture} className="w-10 h-10 rounded-full" alt="User Profile" />
              <div className="flex flex-col gap-y-1">
                <h3 className="capitalize font-[500] text-[#2b2b2b] text-xs">john doe</h3>
                <p className="text-[#d4d4d4] text-[8px]">I have been trying to reach, thanks alot for the money I really appreciate...</p>
              </div>
            </main>
            <div className="flex flex-col gap-y-1 items-end">
              <time dateTime="19:30" className="text-[#d4d4d4] text-xs">19:30 PM</time>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <main className="flex gap-x-2 items-center">
              <img src={display_picture} className="w-10 h-10 rounded-full" alt="User Profile" />
              <div className="flex flex-col gap-y-1">
                <h3 className="capitalize font-[500] text-[#2b2b2b] text-xs">john doe</h3>
                <p className="text-[#7771ff] text-[8px]">How are you my bro</p>
              </div>
            </main>
            <div className="flex flex-col gap-y-1 items-end">
              <time dateTime="19:30" className="text-[#d4d4d4] text-xs">19:30 PM</time>
              <div className="bg-[#6664FE] w-2.5 h-2.5 text-[6px] flex justify-center items-center text-[#E7E6FE] rounded-full">5</div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#F8F8F8] fixed bottom-0 w-full py-3 px-5 flex justify-between">
        <div className="flex flex-col items-center w-fit h-fit gap-y-0.5">
          <MessageCircle size={18} className="text-[#6664FE]" />
          <p className="text-[8px] text-[#6664FE]">Messages</p>
        </div>
        <div className="flex flex-col items-center w-fit h-fit gap-y-0.5">
          <MessageCircle size={18} className="text-[#d4d4d4]" />
          <p className="text-[8px] text-[#d4d4d4]">Messages</p>
        </div>
        <div className="flex flex-col items-center w-fit h-fit gap-y-0.5">
          <MessageCircle size={18} className="text-[#d4d4d4]" />
          <p className="text-[8px] text-[#d4d4d4]">Messages</p>
        </div>
        <div className="flex flex-col items-center w-fit h-fit gap-y-0.5">
          <MessageCircle size={18} className="text-[#d4d4d4]" />
          <p className="text-[8px] text-[#d4d4d4]">Messages</p>
        </div>
      </footer>
    </section>
  );
}

export default MessagePage;
