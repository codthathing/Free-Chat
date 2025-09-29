import { ArrowLeft, CheckCheck, Mic, PhoneCall, Plus, Video } from "lucide-react";
import MessageIcons from "../components/messages/MessageIcons";
import MutualProfile from "../components/mutuals/MutualProfile";
import MutualMessagesDate from "../components/mutuals/MutualMessagesDate";

const mutualIcons = [
  { id: 0, Icon: Video },
  { id: 1, Icon: PhoneCall },
];

export default function MutualPage() {
  return (
    <section className="h-[100dvh] flex flex-col">
      <header className="flex justify-between items-center p-4">
        <div className="flex gap-x-5 items-center">
          <ArrowLeft
            size={20}
            className="text-[#2B2B2B]"
          />
          <MutualProfile />
        </div>
        <MessageIcons messageIconDetails={mutualIcons} />
      </header>
      <main className="bg-[#F2F2F2] flex-1 relative">
        <MutualMessagesDate />
        <div className="p-4 flex flex-col gap-y-1 [&>[data-status='mutual']>li>span]:bg-white [&>[data-status='user']]:self-end [&>[data-status='user']>li]:self-end [&>[data-status='user']>li>span]:bg-[#6664FE] [&>[data-status='user']>li>span]:text-white">
          <ul
            data-status="mutual"
            className="flex flex-col gap-y-1 w-fit max-w-[90%]"
          >
            <li className="flex flex-col gap-y-0.5 w-fit">
              <span className="whitespace-pre-wrap leading-none rounded-lg p-2.5 w-fit max-w-full text-xs">Hello world, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sit.</span>
              <time
                dateTime=""
                className="leading-none uppercase text-[8px] text-[#BFBFBF]"
              >
                7:20pm
              </time>
            </li>
            <li className="flex flex-col gap-y-0.5 w-fit">
              <span className="whitespace-pre-wrap leading-none rounded-lg p-2.5 w-fit max-w-full text-xs">Hello world</span>
              <time
                dateTime=""
                className="leading-none uppercase text-[8px] text-[#BFBFBF]"
              >
                7:20pm
              </time>
            </li>
          </ul>
          <ul
            data-status="user"
            className="flex flex-col gap-y-1 w-fit max-w-[90%]"
          >
            <li className="flex flex-col gap-y-0.5 w-fit">
              <span className="whitespace-pre-wrap leading-none rounded-lg p-2.5 w-fit max-w-full text-xs">Hello world, thanks very much. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, atque!</span>
              <div className="self-end w-fit flex gap-x-1 items-center">
                <time
                  dateTime=""
                  className="leading-none uppercase text-[8px] text-[#BFBFBF]"
                >
                  7:20pm
                </time>
                <CheckCheck
                  size={8}
                  color="#A4CBEB"
                />
              </div>
            </li>
            <li className="flex flex-col gap-y-0.5 w-fit">
              <span className="whitespace-pre-wrap leading-none rounded-lg p-2.5 w-fit max-w-full text-xs">Hello world</span>
              <div className="self-end w-fit flex gap-x-1 items-center">
                <time
                  dateTime=""
                  className="leading-none uppercase text-[8px] text-[#BFBFBF]"
                >
                  7:20pm
                </time>
                <CheckCheck size={8} color="#BFBFBF" />
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer>
        <div>
          <Plus />
        </div>
        <div>
          <input
            type="text"
            name=""
          />
          <Mic />
        </div>
      </footer>
    </section>
  );
}
