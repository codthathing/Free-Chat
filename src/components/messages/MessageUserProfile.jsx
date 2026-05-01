import { Bell, ChevronDown } from "lucide-react";
import display_picture from "../../assets/display-picture.jpg";

export default function MessageUserProfile({ profile, setProfile }) {
  return (
    <>
      <div className="flex gap-x-6 items-center">
        <span className="bg-[#F8F8F8] p-1.5 rounded-full cursor-pointer hidden md:block">
          <Bell size={16} className="text-[#5B5B5B]" />
        </span>
        <div className="flex flex-col gap-y-1 items-center">
          <img src={display_picture} className="w-8 h-8 rounded-full" />
          <div className="hidden md:flex gap-x-1 items-center cursor-pointer" onClick={() => setProfile(!profile)}>
            <span className="text-xs">Me</span>
            <span className="bg-[#F8F8F8] p-0.5 rounded-md cursor-pointer">
              <ChevronDown size={10} className="" />
            </span>
          </div>
        </div>
      </div>
      {profile && (
        <aside className="hidden md:flex absolute top-[107.5%] right-4 w-70 bg-white p-4 rounded-lg flex-col gap-y-2 divide-y divide-gray-300">
          <main className="flex flex-col gap-y-2.5 pb-2">
            <div className="flex gap-x-2.5 items-center">
              <img src={display_picture} className="w-10 h-10 rounded-full" />
              <div className="flex-col gap-y-1 flex">
                <h3 className="capitalize leading-none font-bold text-sm">alexander kirk</h3>
                <p className="leading-none text-[10px]">@alexander</p>
              </div>
            </div>
            <p className="text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error autem sit.</p>
            <div className="flex items-center gap-x-2">
              <button type="button" className="capitalize border border-black bg-none py-1.25 text-black w-full rounded-full text-xs">
                edit profile
              </button>
              <button type="button" className="capitalize border-none bg-black py-1.25 text-white w-full rounded-full text-xs">
                add friends
              </button>
            </div>
          </main>
          <div className="flex flex-col gap-y-1 pb-2">
            <h1 className="text-sm font-bold capitalize">account</h1>
            <ul className="flex flex-col gap-y-0.5 list-none text-gray-500">
              <li className="text-xs capitalize">settings & privacy</li>
              <li className="text-xs capitalize">help</li>
              <li className="text-xs capitalize">language</li>
            </ul>
          </div>
          <p className="capitalize text-sm text-gray-500">sign out</p>
        </aside>
      )}
    </>
  );
}
