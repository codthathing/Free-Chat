import {Heart, Phone, UserPlus, Target, Users} from "lucide-react";
import display_picture from "/display-picture.jpg";

export default function NotificationSection() {
  return (
    <section className={"flex-1 overflow-hidden flex p-6 md:pt-10 md:justify-center w-full bg-white md:bg-background-gray"}>
      <div className={"w-full flex flex-col gap-y-5 lg:gap-y-4 md:w-[70%] lg:w-2/5"}>
        <h1 className={"hidden md:block text-heading-black font-semibold md:text-xl"}>Notifications</h1>
        <section className={"w-full flex flex-col gap-y-3 md:gap-y-4 divide-y divide-background-gray md:bg-white md:border border-light-gray md:rounded-2xl h-fit max-h-full  md:px-5 md:py-8 lg:py-6 lg:px-4"}>
          <div className={"flex justify-between gap-x-2 md:gap-x-2.5 items-center pb-3 md:pb-4"}>
            <div className="flex items-center gap-x-2 md:gap-x-2.5">
              <div className="relative shrink-0">
                <img src={display_picture} className={`w-10 h-10 rounded-full`} alt="Display Picture" />
                <div className="bg-periwinkle-purple absolute right-0 bottom-0.5 w-3.5 h-3.5 flex items-center justify-center rounded-full border border-input-gray"><UserPlus className="size-3 text-white"/></div>
              </div>
              <div className={"flex flex-col"}>
                <p className={`text-xs text-charcoal-black`}><span className={"text-charcoal-black font-semibold capitalize shrink-0"}>nadia reed</span><span className={"ml-1"}>sent you a friend request</span></p>
                <span className={"text-medium-gray text-xs md:text-sm lg:text-xs"}>45m ago</span>
              </div>
            </div>
            <div className={"flex gap-x-2"}>
              {["accept", "decline"].map((text, index) => <button key={index} className={`capitalize text-sm md:text-base lg:text-sm py-1 px-2.75 rounded-lg ${text === "accept" ? "text-white bg-charcoal-black border-none" : "text-charcoal-black bg-transparent border border-light-gray"}`}>{text}</button>)}
            </div>
          </div>
          <div className={"flex justify-between gap-x-2 md:gap-x-2.5 items-center pb-3 md:pb-4"}>
            <div className="flex items-center gap-x-2 md:gap-x-2.5">
              <div className="relative shrink-0">
                <img src={display_picture} className={`w-10 h-10 rounded-full`} alt="Display Picture" />
                <div className="bg-coral absolute right-0 bottom-0.5 w-3.5 h-3.5 flex items-center justify-center rounded-full border border-input-gray"><Heart className="size-3 text-white"/></div>
              </div>
              <div className={"flex flex-col"}>
                <p className={`text-xs text-charcoal-black`}><span className={"text-charcoal-black font-semibold capitalize"}>cameron williamson</span><span className={"ml-1"}>sent you a friend request</span></p>
                <span className={"text-medium-gray text-xs md:text-sm lg:text-xs"}>45m ago</span>
              </div>
            </div>
          </div>
          <div className={"flex justify-between gap-x-2 md:gap-x-2.5 items-center pb-3 md:pb-4"}>
            <div className="flex items-center gap-x-2 md:gap-x-2.5">
              <div className="relative shrink-0">
                <img src={display_picture} className={`w-10 h-10 rounded-full`} alt="Display Picture" />
                <div className="bg-blue-600 absolute right-0 bottom-0.5 w-3.5 h-3.5 flex items-center justify-center rounded-full border border-input-gray"><Users className="size-3 text-white"/></div>
              </div>
              <div className={"flex flex-col"}>
                <p className={`text-xs text-charcoal-black`}><span className={"text-charcoal-black font-semibold capitalize"}>design crew</span><span className={"ml-1"}>sent you a friend request</span></p>
                <span className={"text-medium-gray text-xs md:text-sm lg:text-xs"}>45m ago</span>
              </div>
            </div>
          </div>
          <div className={"flex justify-between gap-x-2 md:gap-x-2.5 items-center pb-3 md:pb-4"}>
            <div className="flex items-center gap-x-2 md:gap-x-2.5">
              <div className="relative shrink-0">
                <img src={display_picture} className={`w-10 h-10 rounded-full`} alt="Display Picture" />
                <div className="bg-red-500 absolute right-0 bottom-0.5 w-3.5 h-3.5 flex items-center justify-center rounded-full border border-input-gray"><Target className="size-3 text-white"/></div>
              </div>
              <div className={"flex flex-col"}>
                <p className={`text-xs text-charcoal-black`}><span className={"text-charcoal-black font-semibold capitalize"}>james milner</span><span className={"ml-1"}>sent you a friend request</span></p>
                <span className={"text-medium-gray text-xs md:text-sm lg:text-xs"}>45m ago</span>
              </div>
            </div>
          </div>
          <div className={"flex justify-between gap-x-2 md:gap-x-2.5 items-center pb-3 md:pb-4"}>
            <div className="flex items-center gap-x-2 md:gap-x-2.5">
              <div className="relative shrink-0">
                <img src={display_picture} className={`w-10 h-10 rounded-full`} alt="Display Picture" />
                <div className="bg-green-500 absolute right-0 bottom-0.5 w-3.5 h-3.5 flex items-center justify-center rounded-full border border-input-gray"><Phone className="size-3 text-white"/></div>
              </div>
              <div className={"flex flex-col"}>
                <p className={`text-xs text-charcoal-black`}><span className={"text-charcoal-black font-semibold capitalize"}>john doe</span><span className={"ml-1"}>sent you a friend request</span></p>
                <span className={"text-medium-gray text-xs md:text-sm lg:text-xs"}>45m ago</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}