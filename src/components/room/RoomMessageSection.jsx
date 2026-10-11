import PropTypes from "prop-types";
import { CheckCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * @param {Object} props
 * @param {{
 *   id: number,
 *   status: string,
 *   array: { id: number, type: string, text: string, time: string }[]
 * }[]} props.messageDetailsArray
 */

export default function RoomMessageSection({ messageDetailsArray: array }) {
  const messagesContainerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      setTimeout(() => setIsScrolled(true), 0);
    }
  }, [array]);

  return (
    <div ref={messagesContainerRef} className={`${isScrolled ? "visible" : "invisible"} p-4 flex flex-col gap-y-1 h-full overflow-y-auto custom-scrollbar [&>[data-status='other']>li>span]:bg-white [&>[data-status='other']>li>span]:rounded-bl-sm *:data-[status='user']:self-end [&>[data-status='user']>li>span]:rounded-br-sm [&>[data-status='user']>li]:self-end [&>[data-status='user']>li>span]:bg-periwinkle-purple [&>[data-status='user']>li>span]:text-white`}>
      {array.map(({ id, status, array }) => {
        return (
          <ul key={id} data-status={status} className="flex flex-col gap-y-1 w-fit max-w-[90%]">
            {array.map(({ id, type, text, time }) => {
              return (
                <li key={id} className="flex flex-col gap-y-0.5 w-fit">
                  <span className="whitespace-pre-wrap leading-none rounded-xl p-2.5 w-fit max-w-full text-xs text-charcoal-black">{text}</span>
                  {type === "user" ? (
                    <div className="self-end w-fit flex gap-x-1 items-center">
                      <time dateTime="" className="leading-none uppercase text-[8px] text-light-gray">
                        {time}
                      </time>
                      <CheckCheck size={8} color="#A4CBEB" />
                    </div>
                  ) : (
                    <time dateTime="" className="leading-none uppercase text-[8px] text-light-gray">
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

RoomMessageSection.propTypes = {
  messageDetailsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      array: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          type: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};
