import PropTypes from "prop-types";

function MessageStatus({ mutualsStatus }) {
  return (
    <>
      {mutualsStatus.map(({ id, displayPicture, userName }) => {
        return (
          <div key={id} className="flex flex-col items-center">
            <img
              src={displayPicture}
              className="w-10 h-10 rounded-full mb-0.5 border border-[#F8F8F8] p-[1px]"
              alt="Display Picture"
            />
            <p className="text-xs capitalize text-[#555555] font-[500]">
              {userName}
            </p>
          </div>
        );
      })}
    </>
  );
}

MessageStatus.propTypes = {
  mutualsStatus: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      displayPicture: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
    })
  ),
};

export default MessageStatus;
