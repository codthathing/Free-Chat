import {useState} from "react";
import {
  PhoneIcon,
  PhoneIncomingIcon,
  PhoneMissedIcon, PhoneOutgoingIcon,
  VideoIcon
} from "lucide-react";

const callFilter = [
  { id: 0, text: "all" },
  { id: 1, text: "missed" },
  { id: 2, text: "video" },
]

export default function CallSection() {
  const [currentCallFilter, setCurrentCallFilter] = useState("all");

  return (
    <section className={"flex-1 overflow-hidden flex p-6 md:pt-10 md:justify-center w-full bg-white md:bg-background-gray"}>
      <div className={"w-full flex flex-col gap-y-5 lg:gap-y-4 md:w-[70%] lg:w-2/5"}>
        <h1 className={"hidden md:block text-heading-black font-semibold md:text-xl"}>Calls</h1>
        <div className={"flex gap-x-2"}>{callFilter.map(({ id, text }) => <p key={id} className={`border border-light-gray capitalize text-charcoal-black text-sm md:text-base lg:text-sm py-1 px-2.75 rounded-2xl ${text === currentCallFilter ? "text-white bg-charcoal-black" : "text-charcoal-black bg-transparent"}`} onClick={() => setCurrentCallFilter(text)}>{text}</p>)}</div>
        <div className={"w-full flex flex-col gap-y-3 md:gap-y-4 divide-y divide-background-gray md:bg-white md:border border-light-gray md:rounded-2xl h-fit max-h-full  md:px-5 md:py-8 lg:py-6 lg:px-4"}>
          <div className={"flex justify-between items-center pb-3 md:pb-4"}>
            <div className={"flex items-center gap-x-2"}>
              <img src={"/display-picture.jpg"} alt={"User DP"} className={"w-10 h-10 md:w-13 md:h-13 lg:w-11 lg:h-11 rounded-full"} />
              <div className={"flex flex-col gap-y-0.5 md:gap-y-0"}>
                <p className={"text-red-500 text-sm md:text-lg lg:text-base"}>Frederick Floyd</p>
                <div className={"flex items-center gap-x-2"}>
                  <PhoneMissedIcon className={"size-3.5 md:size-5 lg:size-4 text-red-500"} />
                  <span className={"text-sm md:text-base lg:text-sm text-charcoal-black font-light"}>{"Missed"} · {"Today, 08:14"}</span>
                </div>
              </div>
            </div>
            <PhoneIcon className={"size-4 md:size-6 lg:size-5"} />
          </div>
          <div className={"flex justify-between items-center pb-3 md:pb-4"}>
            <div className={"flex items-center gap-x-2"}>
              <img src={"/display-picture.jpg"} alt={"User DP"} className={"w-10 h-10 md:w-13 md:h-13 lg:w-11 lg:h-11 rounded-full"} />
              <div className={"flex flex-col gap-y-0.5 md:gap-y-0"}>
                <p className={"text-charcoal-black text-sm md:text-lg lg:text-base"}>Frederick Floyd</p>
                <div className={"flex items-center gap-x-2"}>
                  <VideoIcon className={"size-3.5 md:size-5 lg:size-4 text-green-500"} />
                  <span className={"text-sm md:text-base lg:text-sm text-charcoal-black font-light"}>{"Received"} · {"Today, 08:14"}</span>
                </div>
              </div>
            </div>
            <VideoIcon className={"size-4 md:size-6 lg:size-5"} />
          </div>
          <div className={"flex justify-between items-center pb-3 md:pb-4"}>
            <div className={"flex items-center gap-x-2"}>
              <img src={"/display-picture.jpg"} alt={"User DP"} className={"w-10 h-10 md:w-13 md:h-13 lg:w-11 lg:h-11 rounded-full"} />
              <div className={"flex flex-col gap-y-0.5 md:gap-y-0"}>
                <p className={"text-charcoal-black text-sm md:text-lg lg:text-base"}>Frederick Floyd</p>
                <div className={"flex items-center gap-x-2"}>
                  <PhoneOutgoingIcon className={"size-3.5 md:size-5 lg:size-4 text-charcoal-black"} />
                  <span className={"text-sm md:text-base lg:text-sm text-charcoal-black font-light"}>{"Received"} · {"Today, 08:14"}</span>
                </div>
              </div>
            </div>
            <PhoneIcon className={"size-4 md:size-6 lg:size-5"} />
          </div>
          <div className={"flex justify-between items-center pb-3 md:pb-4"}>
            <div className={"flex items-center gap-x-2"}>
              <img src={"/display-picture.jpg"} alt={"User DP"} className={"w-10 h-10 md:w-13 md:h-13 lg:w-11 lg:h-11 rounded-full"} />
              <div className={"flex flex-col gap-y-0.5 md:gap-y-0"}>
                <p className={"text-red-500 text-sm md:text-lg lg:text-base"}>Frederick Floyd</p>
                <div className={"flex items-center gap-x-2"}>
                  <VideoIcon className={"size-3.5 md:size-5 lg:size-4 text-red-500"} />
                  <span className={"text-sm md:text-base lg:text-sm text-charcoal-black font-light"}>{"Received"} · {"Today, 08:14"}</span>
                </div>
              </div>
            </div>
            <VideoIcon className={"size-4 md:size-6 lg:size-5"} />
          </div>
          <div className={"flex justify-between items-center"}>
            <div className={"flex items-center gap-x-2"}>
              <img src={"/display-picture.jpg"} alt={"User DP"} className={"w-10 h-10 md:w-13 md:h-13 lg:w-11 lg:h-11 rounded-full"} />
              <div className={"flex flex-col gap-y-0.5 md:gap-y-0"}>
                <p className={"text-charcoal-black text-sm md:text-lg lg:text-base"}>Frederick Floyd</p>
                <div className={"flex items-center gap-x-2"}>
                  <PhoneIncomingIcon className={"size-3.5 md:size-5 lg:size-4 text-green-500"} />
                  <span className={"text-sm md:text-base lg:text-sm text-charcoal-black font-light"}>{"Received"} · {"Today, 08:14"}</span>
                </div>
              </div>
            </div>
            <PhoneIcon className={"size-4 md:size-6 lg:size-5"} />
          </div>
        </div>
      </div>
    </section>
  )
}