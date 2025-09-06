import PropTypes from "prop-types";

export default function MessageIcons({ messageIconDetails }) {
  return (
    <div className="flex gap-x-4">
      {messageIconDetails.map(({ id, Icon }) => {
        return (
          <span key={id} className="bg-[#F8F8F8] p-1.5 rounded-full">
            <Icon size={16} className="text-[#5B5B5B]" />
          </span>
        );
      })}
    </div>
  );
}

MessageIcons.propTypes = {
  messageIconDetails: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      Icon: PropTypes.elementType.isRequired,
    })
  ),
};
