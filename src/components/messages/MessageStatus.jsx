import PropTypes from "prop-types";
import MessageUserStatus from "./MessageUserStatus";

function MessageStatus({ mutualsStatus }) {
  return (
    <section className="border-b border-input-gray pb-4 md:hidden">
      <h3 className="text-medium-gray text-sm mb-3">Recent Update</h3>
      <main className="flex gap-x-3">
        <MessageUserStatus />
        {mutualsStatus.map(({ id, displayPicture, userName }) => {
          return (
            <div key={id} className="flex flex-col items-center">
              <img src={displayPicture} className="w-10 h-10 rounded-full mb-0.5 border border-input-gray p-px" alt="Display Picture" />
              <p className="text-xs capitalize text-charcoal-black font-medium">{userName}</p>
            </div>
          );
        })}
      </main>
    </section>
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
