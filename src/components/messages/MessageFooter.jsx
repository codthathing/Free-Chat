import PropTypes from "prop-types";

export default function MessageFooter({ footerIcons }) {
  return (
    <footer className="border-t border-[#F8F8F8] bg-white/70 backdrop-blur-md fixed bottom-0 w-full py-3 px-5 flex justify-between md:hidden">
      {footerIcons.map(({ id, Icon, iconText }) => {
        if (id !== 2) {
          return (
            <div key={id} className="flex flex-col items-center w-fit h-fit gap-y-0.5">
              <Icon size={18} className={`${"messages" === iconText ? "text-[#6664FE]" : "text-[#5B5B5B]"}`} />
              <p className={`text-[8px] ${"messages" === iconText ? "text-[#6664FE]" : "text-[#5B5B5B]"} capitalize`}>{iconText}</p>
            </div>
          );
        } else {
          return;
        }
      })}
    </footer>
  );
}

MessageFooter.propTypes = {
  footerIcons: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      Icon: PropTypes.elementType.isRequired,
      iconText: PropTypes.string.isRequired,
    })
  ),
};
