import {Plus, XIcon} from "lucide-react";

export default function FilterSection() {
  return (
    <section className={"flex-1 overflow-hidden flex p-8 md:pt-10 md:justify-center w-full bg-background-gray"}>
      <div className={"w-full h-fit max-h-full flex flex-col gap-y-5 lg:gap-y-4 md:w-[70%] lg:w-2/5 p-4 md:px-8 md:py-10 lg:py-7.5 lg:px-6 bg-white border border-light-gray rounded-2xl"}>
        <h1 className={"hidden md:block capitalize font-bold text-xl lg:text-2xl text-heading-black"}>create custom filter</h1>
        <section className={"flex flex-col gap-y-2"}>
          <h3 className={"text-medium-gray text-sm first-letter:capitalize font-semibold md:text-base lg:text-sm"}>filter name</h3>
          <input type={"text"} className={"bg-input-gray outline-none p-2.5 md:py-3 md:px-4 md:text-lg lg:text-base rounded-xl capitalize text-charcoal-black"} name={"filter-name-input"} placeholder={"filter name"} />
        </section>
        <div className={"flex flex-col gap-y-5 overflow-y-auto"}>
          <section className={"flex flex-col gap-y-2"}>
            <h3 className={"text-medium-gray text-sm first-letter:capitalize font-semibold md:text-base lg:text-sm"}>include people</h3>
            <div className={"flex gap-1 flex-wrap"}>
              <div className={"bg-periwinkle-purple/10 text-periwinkle-purple capitalize flex gap-x-1.5 md:gap-x-2 p-1 pr-3 rounded-3xl w-fit items-center"}>
                <img src={"/display-picture.jpg"} alt={"User DP"} className={"w-5 h-5 md:w-7 md:h-7 lg:w-5 lg:h-5 rounded-full"} />
                <span className={"text-sm md:text-base lg:text-sm"}>john doe</span>
                <XIcon className={"size-3 md:size-4 lg:size-3"} />
              </div>
              <div className={"bg-periwinkle-purple/10 text-periwinkle-purple capitalize flex gap-x-1.5 md:gap-x-2 p-1 pr-3 rounded-3xl w-fit items-center"}>
                <img src={"/display-picture.jpg"} alt={"User DP"} className={"w-5 h-5 md:w-7 md:h-7 lg:w-5 lg:h-5 rounded-full"} />
                <span className={"text-sm md:text-base lg:text-sm"}>alex kirk</span>
                <XIcon className={"size-3 md:size-4 lg:size-3"} />
              </div>
              <div className={"bg-periwinkle-purple/10 text-periwinkle-purple capitalize flex gap-x-1.5 md:gap-x-2 p-1 pr-3 rounded-3xl w-fit items-center"}>
                <img src={"/display-picture.jpg"} alt={"User DP"} className={"w-5 h-5 md:w-7 md:h-7 lg:w-5 lg:h-5 rounded-full"} />
                <span className={"text-sm md:text-base lg:text-sm"}>sarah lin</span>
                <XIcon className={"size-3 md:size-4 lg:size-3"} />
              </div>
            </div>
          </section>
          <section className={"flex flex-col gap-y-4"}>
            <h3 className={"text-medium-gray text-sm first-letter:capitalize font-semibold md:text-base lg:text-sm"}>add more</h3>
            <div className={"bg-input-gray rounded-2xl flex flex-col divide-y divide-background-gray "}>
              <div className={"p-2.5 md:p-3.5 flex justify-between items-center"}>
                <div className={"flex items-center gap-x-2"}>
                  <img src={"/display-picture.jpg"} alt={"User DP"} className={"w-8 h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 rounded-full"} />
                  <h3 className={"capitalize text-sm md:text-base lg:text-sm"}>alex kirk</h3>
                </div>
                <div className={"w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 rounded-full border border-light-gray flex items-center justify-center"}><Plus className={"size-4 md:size-5 lg:size-4 text-charcoal-black"} /></div>
              </div>
              <div className={"p-2.5 md:p-3.5 flex justify-between items-center"}>
                <div className={"flex items-center gap-x-2"}>
                  <img src={"/display-picture.jpg"} alt={"User DP"} className={"w-8 h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 rounded-full"} />
                  <h3 className={"capitalize text-sm md:text-base lg:text-sm"}>maria gomez</h3>
                </div>
                <div className={"w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 rounded-full border border-light-gray flex items-center justify-center"}><Plus className={"size-4 md:size-5 lg:size-4 text-charcoal-black"} /></div>
              </div>
            </div>
          </section>
        </div>
        <button type={"button"} className={"bg-charcoal-black text-white text-sm capitalize font-semibold w-full py-3 md:py-3.5 lg:text-sm md:text-base rounded-2xl"}>create filter</button>
      </div>
    </section>
  )
}
