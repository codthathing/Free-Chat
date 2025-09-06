import PropTypes from "prop-types";

function MessageProfileSection({ mutualsMessageDetails }) {
  return (
    <section className="flex flex-col py-1.5 gap-y-2.5">
      {mutualsMessageDetails.map(
        ({
          id,
          displayPicture,
          userName: { firstName, lastName },
          message,
          timeOfMessage,
          amountOfUnreadMessages,
        }) => {
          return (
            <div key={id} className="flex gap-x-2 justify-between">
              <main className="flex gap-x-2 items-center">
                <img
                  src={displayPicture}
                  className="w-10 h-10 rounded-full"
                  alt="User Profile"
                />
                <div className="flex flex-col gap-y-1">
                  <h3 className="capitalize font-[500] text-[#2b2b2b] text-xs">
                    {firstName} {lastName}
                  </h3>
                  {/* text-[#7771ff] */}
                  <p className="text-[#d4d4d4] text-[8px]">{message}</p>
                </div>
              </main>
              <div className="flex flex-col gap-y-1 items-end">
                <time
                  dateTime="19:30"
                  className="text-[#d4d4d4] text-xs text-nowrap"
                >
                  {timeOfMessage}
                </time>
                <div className="bg-[#6664FE] w-2.5 h-2.5 text-[6px] flex justify-center items-center text-[#E7E6FE] rounded-full">
                  {amountOfUnreadMessages}
                </div>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
}

MessageProfileSection.propTypes = {
  mutualsMessageDetails: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      displayPicture: PropTypes.string.isRequired,
      userName: PropTypes.exact({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string,
      }).isRequired,
      message: PropTypes.string,
      timeOfMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      amountOfUnreadMessages: PropTypes.number,
    })
  ),
};

export default MessageProfileSection;
