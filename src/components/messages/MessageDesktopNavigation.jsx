import PropTypes from "prop-types";

export default function MessageDesktopNavigation({ navigationIcon }) {
  return (
    <div className="hidden md:flex flex-col gap-y-5 bg-white py-6 px-6">
      {navigationIcon.map(({ id, Icon, iconText }) => {
        return <Icon key={id} size={14} className={`${"messages" === iconText ? "text-[#6664FE]" : "text-[#5B5B5B]"} cursor-pointer`} />
      })}
    </div>
  );
}

MessageDesktopNavigation.propTypes = {
  footerIcons: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      Icon: PropTypes.elementType.isRequired,
      iconText: PropTypes.string.isRequired,
    })
  ),
};