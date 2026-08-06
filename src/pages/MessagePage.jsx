import { Users } from "lucide-react";
import MessageSection from "../components/messages/MessageSection.jsx";
import MessageMobileStatus from "../components/messages/MessageMobileStatus.jsx";
import MessageMobileFooter from "../components/messages/MessageMobileFooter.jsx";
import MessageUserProfile from "../components/messages/MessageUserProfile.jsx";
import MessageDesktopMenu from "../components/messages/MessageDesktopMenu.jsx";
import MessageDesktopHeader from "../components/messages/MessageDesktopHeader";
import { Route, Routes } from "react-router-dom";
import MutualPage from "./MutualPage";
import MessageMobileHeader from "../components/messages/MessageMobileHeader.jsx";
import {useSelector} from "react-redux";

export default function MessagePage() {
  const { currentTabId, mobile } = useSelector((state) => state.messageUI);

  return (
    <section className="h-dvh flex flex-col md:gap-y-0.5 md:bg-background-gray md:p-1">
      <header className="relative flex flex-col gap-y-4 px-3 py-6 w-full md:p-6 md:bg-white">
        <div className="flex md:gap-x-10 justify-between items-center">
          <h1 className="text-xl font-bold tracking-wider text-heading-black">FreeChat</h1>
          <MessageUserProfile />
        </div>
        <MessageMobileHeader />
      </header>
      <section className="flex-1 overflow-hidden md:flex md:gap-x-0.5">
        <MessageDesktopMenu />
        <div className="h-full md:w-full md:flex md:gap-x-0.5">
          <main className="relative px-3 md:bg-white h-full flex flex-col md:p-4 md:gap-y-4 md:w-2/5 lg:w-[30%] md:shrink-0 overflow-y-hidden">
            <MessageMobileStatus />
            <MessageDesktopHeader />
            <MessageSection />
            {currentTabId === 2 && <div className={"absolute bottom-4 right-4 cursor-pointer shadow-lg p-4 bg-periwinkle-purple rounded-full w-16 h-16 flex justify-center items-center"}><Users size={24} className={"text-white"}/></div>}
          </main>
          <Routes>
            <Route path="/" element={
              <div className="hidden md:flex text-4xl items-center justify-center w-full h-full">
                <p className="text-charcoal-black">Hello, welcome to FreeChat</p>
              </div>
            }/>
            {!mobile && <Route path=":mutual" element={<MutualPage />} />}
          </Routes>
        </div>
      </section>
      <MessageMobileFooter />
    </section>
  );
}
