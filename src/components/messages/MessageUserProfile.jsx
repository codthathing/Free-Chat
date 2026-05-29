import { Bell, ChevronDown } from "lucide-react";
import display_picture from "../../assets/display-picture.jpg";

export default function MessageUserProfile({ profile, setProfile }) {
  return (
    <>
      <div className="flex gap-x-6 items-center">
        <span className="bg-input-gray p-1.5 rounded-full cursor-pointer hidden md:block">
          <Bell size={16} className="text-medium-gray" />
        </span>
        <div className="flex flex-col gap-y-1 items-center">
          <img src={display_picture} className="w-8 h-8 rounded-full" />
          <div className="hidden md:flex gap-x-1 items-center cursor-pointer" onClick={() => setProfile(!profile)}>
            <span className="text-xs text-charcoal-black">Me</span>
            <span className="bg-input-gray p-0.5 rounded-md cursor-pointer">
              <ChevronDown size={10} className="text-medium-gray" />
            </span>
          </div>
        </div>
      </div>
      {profile && (
        <aside className="hidden md:flex absolute top-[107.5%] right-4 w-70 bg-white p-4 rounded-lg flex-col gap-y-2 divide-y divide-soft-lavender">
          <main className="flex flex-col gap-y-2.5 pb-2">
            <div className="flex gap-x-2.5 items-center">
              <img src={display_picture} className="w-10 h-10 rounded-full" />
              <div className="flex-col gap-y-1 flex">
                <h3 className="capitalize leading-none font-bold text-sm text-heading-black">alexander kirk</h3>
                <p className="leading-none text-[10px] text-medium-gray">@alexander</p>
              </div>
            </div>
            <p className="text-sm mt-1 text-charcoal-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error autem sit.</p>
            <div className="flex items-center gap-x-2">
              <button type="button" className="capitalize border border-charcoal-black bg-none py-1.25 text-charcoal-black w-full rounded-full text-xs">edit profile</button>
              <button type="button" className="capitalize border-none bg-charcoal-black py-1.25 text-white w-full rounded-full text-xs">add friends</button>
            </div>
          </main>
          <div className="flex flex-col gap-y-1 pb-2">
            <h1 className="text-sm font-bold capitalize text-heading-black">account</h1>
            <ul className="flex flex-col gap-y-0.5 list-none text-medium-gray">
              <li className="text-xs capitalize">settings & privacy</li>
              <li className="text-xs capitalize">help</li>
              <li className="text-xs capitalize">language</li>
            </ul>
          </div>
          <p className="capitalize text-sm text-heading-black font-bold cursor-pointer">sign out</p>
        </aside>
      )}
    </>
  );
}
