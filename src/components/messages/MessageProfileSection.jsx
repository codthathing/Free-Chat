import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

/*** @param {{ mutualMessageDetails: { id: number, displayPicture: string, userName: { firstName: string, lastName: String }, message: string, timeOfMessage: string, amountOfUnreadMessage: number }[] }} props */

export default function MessageProfileSection({ mutualMessageDetails }) {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col pt-1 mt-1 pb-16 md:mt-0 md:p-0 gap-y-2.5 md:gap-y-4 overflow-y-auto no-scrollbar">
      {mutualMessageDetails.map(({ id, displayPicture, userName: { firstName, lastName }, message, timeOfMessage, amountOfUnreadMessages }) => {
        return (
          <div key={id} className="flex gap-x-2 justify-between cursor-pointer" onClick={() => navigate(`/messages/${firstName.toLowerCase()}-${lastName.toLowerCase()}`)}>
            <main className="flex gap-x-2 items-center">
              <img src={`${displayPicture}`} className="w-10 h-10 rounded-full" alt="User Profile" />
              <div className="flex flex-col gap-y-1">
                <h3 className="capitalize font-medium text-charcoal-black text-xs">
                  {firstName} {lastName}
                </h3>
                {/* text-[#7771ff] */}
                <p className="text-light-gray text-[8px] line-clamp-1">{message}</p>
              </div>
            </main>
            <div className="flex flex-col gap-y-1 items-end">
              <time dateTime="19:30" className="text-light-gray text-xs text-nowrap">
                {timeOfMessage}
              </time>
              <div className="bg-periwinkle-purple w-2.5 h-2.5 text-[6px] flex justify-center items-center text-white rounded-full">{amountOfUnreadMessages}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

MessageProfileSection.propTypes = {
  mutualMessageDetails: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      displayPicture: PropTypes.string.isRequired,
      userName: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
      }).isRequired,
      message: PropTypes.string,
      timeOfMessage: PropTypes.string.isRequired,
      amountOfUnreadMessages: PropTypes.number,
    })
  ).isRequired,
};
