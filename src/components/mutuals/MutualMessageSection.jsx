import PropTypes from "prop-types";
import { CheckCheck } from "lucide-react";

export default function MutualMessageSection({ messageDetailsArray: array }) {
  return (
    <div className="p-4 flex flex-col gap-y-1 [&>[data-status='mutual']>li>span]:bg-white [&>[data-status='user']]:self-end [&>[data-status='user']>li]:self-end [&>[data-status='user']>li>span]:bg-[#6664FE] [&>[data-status='user']>li>span]:text-white">
      {array.map(({ id, status, array }) => {
        return (
          <ul key={id} data-status={status} className="flex flex-col gap-y-1 w-fit max-w-[90%]">
            {array.map(({ id, type, text, time }) => {
              return (
                <li key={id} className="flex flex-col gap-y-0.5 w-fit">
                  <span className="whitespace-pre-wrap leading-none rounded-lg p-2.5 w-fit max-w-full text-xs">{text}</span>
                  {type === "user" ? (
                    <div className="self-end w-fit flex gap-x-1 items-center">
                      <time dateTime="" className="leading-none uppercase text-[8px] text-[#BFBFBF]">
                        {time}
                      </time>
                      <CheckCheck size={8} color="#A4CBEB" />
                    </div>
                  ) : (
                    <time dateTime="" className="leading-none uppercase text-[8px] text-[#BFBFBF]">
                      {time}
                    </time>
                  )}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}

MutualMessageSection.propTypes = {
  messageDetailsArray: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      array: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.number.isRequired,
          type: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
        }).isRequired
      ),
    }).isRequired
  ),
};
