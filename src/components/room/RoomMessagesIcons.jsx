import PropTypes from "prop-types";

/*** @param {{ messageIconDetails: { id: number, Icon: $ElementType }[], className: string }} props */

export default function RoomMessagesIcons({ messageIconDetails, className }) {
  return (
    <div className={`flex gap-x-4 ${className}`}>
      {messageIconDetails.map(({ id, Icon }) => {
        return (
          <span key={id} className="bg-input-gray p-1.5 rounded-full cursor-pointer">
            <Icon size={16} className="text-medium-gray" />
          </span>
        );
      })}
    </div>
  );
}

RoomMessagesIcons.propTypes = {
  messageIconDetails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Icon: PropTypes.elementType.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};
