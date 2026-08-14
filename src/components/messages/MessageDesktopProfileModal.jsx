import display_picture from "../../assets/display-picture.jpg";
import {Pencil, UserPlus} from "lucide-react";

export default function MessageDesktopProfileModal() {
  return (
    <aside className="hidden z-10 md:flex absolute top-[107.5%] right-4 md:w-100 lg:w-70 bg-white md:p-6 md:rounded-xl lg:p-4 lg:rounded-lg flex-col md:gap-y-4 lg:gap-y-2 divide-y divide-soft-lavender">
      <main className="flex flex-col md:gap-y-3 lg:gap-y-2.5 md:pb-4 lg:pb-2">
        <div className="flex gap-x-2.5 items-center">
          <img src={`${display_picture}`} alt={"Profile Picture"} className="md:w-14 md:h-14 lg:w-10 lg:h-10 rounded-full" />
          <div className="flex-col gap-y-1 flex">
            <h3 className="capitalize leading-none font-bold md:text-xl lg:text-sm text-heading-black">alexander kirk</h3>
            <p className="leading-none md:text-base lg:text-[10px] text-medium-gray">@alexander</p>
          </div>
        </div>
        <p className="md:text-base lg:text-sm mt-1 text-charcoal-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error autem sit.</p>
        <div className="flex items-center md:gap-x-4 lg:gap-x-2">
          <button type="button" className="flex items-center justify-center gap-x-2 capitalize border border-charcoal-black bg-none md:py-2 lg:py-1.5 text-charcoal-black w-full rounded-full md:text-xl lg:text-xs">
            <Pencil className={"lg:size-4"} />
            <span>edit profile</span>
          </button>
          <button type="button" className="flex items-center justify-center gap-x-2 capitalize border-none bg-charcoal-black md:py-2 lg:py-1.5 text-white w-full rounded-full md:text-xl lg:text-xs">
            <UserPlus className={"lg:size-4"} />
            <span>add friends</span>
          </button>
        </div>
      </main>
      <div className="flex flex-col md:gap-y-1.5 lg:gap-y-1 md:pb-4 lg:pb-2">
        <h1 className="md:text-xl lg:text-sm font-bold capitalize text-heading-black">account</h1>
        <ul className="flex flex-col md:gap-y-1 lg:gap-y-0.5 list-none text-medium-gray">
          <li className="md:text-base lg:text-xs capitalize">settings & privacy</li>
          <li className="md:text-base lg:text-xs capitalize">help</li>
          <li className="md:text-base lg:text-xs capitalize">language</li>
        </ul>
      </div>
      <p className="capitalize md:text-xl lg:text-sm text-heading-black font-bold cursor-pointer">sign out</p>
    </aside>
  )
}