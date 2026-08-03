import PropTypes from "prop-types";
import MessageProfileModal from "./MessageProfileModal.jsx";

/*** @param {{ footerIcons: { id: number, Icon: $ElementType, iconText: string }[], profile: boolean, setProfile: function }} props */

export default function MessageFooter({ footerIcons, profile, setProfile }) {
  return (
    <>
      {profile && <MessageProfileModal setProfile={setProfile} />}
      <footer className="w-full md:hidden">
        <main className="h-fit w-full mt-auto py-3 px-5 flex justify-between border-t border-input-gray bg-white/70 backdrop-blur-md">
          {footerIcons.map(({ id, Icon, iconText }) => {
            if (id !== 2) {
              return (
                <div key={id} {...(iconText === "profile" && { onClick: () => setProfile(true) })} className="flex flex-col items-center w-fit h-fit gap-y-0.5">
                  <Icon size={18} className={`${"messages" === iconText ? "text-periwinkle-purple" : "text-medium-gray"}`} />
                  <p className={`text-[8px] ${"messages" === iconText ? "text-periwinkle-purple" : "text-medium-gray"} capitalize`}>{iconText}</p>
                </div>
              );
            }
          })}
        </main>
      </footer>
    </>
  );
}

MessageFooter.propTypes = {
  footerIcons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Icon: PropTypes.elementType.isRequired,
      iconText: PropTypes.string.isRequired,
    }),
  ).isRequired,
  profile: PropTypes.bool.isRequired,
  setProfile: PropTypes.func.isRequired,
};
