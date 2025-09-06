import PropTypes from "prop-types";

export default function MessageFooter({ footerIcons }) {
  return (
    <footer className="border-t border-[#F8F8F8] fixed bottom-0 w-full py-3 px-5 flex justify-between">
      {footerIcons.map(({ id, Icon, iconText }) => {
        return (
          <div
            key={id}
            className="flex flex-col items-center w-fit h-fit gap-y-0.5"
          >
            <Icon size={18} className="text-[#6664FE]" />
            <p className="text-[8px] text-[#6664FE] capitalize">{iconText}</p>
          </div>
        );
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
