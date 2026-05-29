import PropTypes from "prop-types";
import display_picture from "../../assets/display-picture.jpg";
import { ChevronRight, HelpCircle, Languages, LogOut, Settings, Users } from "lucide-react";

export default function MessageFooter({ footerIcons, profile, setProfile }) {
  return (
    <footer className="flex flex-col has-[section]:h-dvh fixed bottom-0 w-full md:hidden">
      {profile && (
        <section className="flex flex-1 px-1 bg-white/20">
          <div className="bg-background-gray rounded-t-3xl self-end w-full h-[90%] flex flex-col gap-y-4 divide-y divide-soft-lavender px-4 py-6">
            <main className="flex flex-col gap-y-2.5 pb-2">
              <img src={display_picture} className="w-12 h-12 rounded-lg" />
              <div className="flex flex-col gap-y-1">
                <h3 className="capitalize leading-none font-bold text-xs text-heading-black">alexander kirk</h3>
                <p className="leading-none text-[8px] text-medium-gray">@alexander</p>
              </div>
              <p className="text-xs mt-1 text-charcoal-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error autem sit.</p>
              <div className="flex justify-between items-center p-1.5 border border-soft-lavender rounde-md">
                <section className="flex gap-x-2 items-center">
                  <img src={display_picture} className="w-7 h-7 rounded-full" alt="UNKNOWN PROFILE" />
                  <span className="text-xs capitalize text-charcoal-black">profile</span>
                </section>
                <button type="button" className="capitalize text-xs border-none text-white bg-charcoal-black px-3 py-1">edit</button>
              </div>
            </main>
            <section className="flex flex-col gap-y-5">
              <div className="flex flex-col items-center gap-y-1.5">
                <span className="bg-input-gray p-3 rounded-full cursor-pointer">
                  <Users size={20} className="text-medium-gray" />
                </span>
                <p className="text-[10px] capitalize text-charcoal-black">add friends</p>
              </div>
              <div className="flex flex-col gap-y-2.5">
                <h3 className="font-bold text-xs capitalize text-heading-black">account</h3>
                <main className="w-full flex flex-col gap-y-3.5 p-3.5 rounded-2xl bg-input-gray">
                  <div className="flex items-center gap-x-4">
                    <Settings size={16} className="text-medium-gray" />
                    <main className="flex justify-between items-center pb-1 w-full">
                      <span className="capitalize text-xs text-medium-gray">settings & privacy</span>
                      <ChevronRight size={16} className="text-medium-gray" />
                    </main>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <HelpCircle size={16} className="text-medium-gray" />
                    <main className="flex justify-between items-center pb-1 w-full">
                      <span className="capitalize text-xs text-medium-gray">help</span>
                      <ChevronRight size={16} className="text-medium-gray" />
                    </main>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <Languages size={16} className="text-medium-gray" />
                    <main className="flex justify-between items-center pb-1 w-full">
                      <span className="capitalize text-xs text-medium-gray">language</span>
                      <ChevronRight size={16} className="text-medium-gray" />
                    </main>
                  </div>
                </main>
              </div>
              <div className="flex items-center gap-x-1 cursor-pointer">
                <LogOut size={16} className="text-heading-black" />
                <span className="text-xs capitalize font-bold text-heading-black">sign out</span>
              </div>
            </section>
          </div>
        </section>
      )}
      <main className="h-fit w-full mt-auto py-3 px-5 flex justify-between border-t border-input-gray bg-white/70 backdrop-blur-md">
        {footerIcons.map(({ id, Icon, iconText }) => {
          if (id !== 2) {
            return (
              <div key={id} {...(iconText === "profile" && { onClick: () => setProfile(!profile) })} className="flex flex-col items-center w-fit h-fit gap-y-0.5">
                <Icon size={18} className={`${"messages" === iconText ? "text-periwinkle-purple" : "text-medium-gray"}`} />
                <p className={`text-[8px] ${"messages" === iconText ? "text-periwinkle-purple" : "text-medium-gray"} capitalize`}>{iconText}</p>
              </div>
            );
          }
        })}
      </main>
    </footer>
  );
}

MessageFooter.propTypes = {
  footerIcons: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      Icon: PropTypes.elementType.isRequired,
      iconText: PropTypes.string.isRequired,
    }),
  ),
  profile: PropTypes.bool,
  setProfile: PropTypes.func,
};
