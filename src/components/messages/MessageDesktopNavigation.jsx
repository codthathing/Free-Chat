import { PanelLeft, PanelRight } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function MessageDesktopNavigation({ navigationIcon }) {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="hidden md:block bg-white py-6">
      <div className="border-b-2 border-background-gray px-6 pb-3">
        <span className="cursor-pointer text-charcoal-black" onClick={() => setShowPanel((prev) => !prev)}>
          {showPanel ? <PanelLeft size={14} /> : <PanelRight size={14} />}
        </span>
      </div>
      <main className="flex flex-col gap-y-6 px-6 mt-3">
        {navigationIcon.map(({ id, Icon, iconText }) => {
          return (
            <div key={id} className={`${"messages" === iconText ? "text-periwinkle-purple" : "text-medium-gray"} cursor-pointer flex items-center gap-x-1.5`}>
              <Icon size={14} />
              {showPanel && <span className="text-[10px] leading-none">{iconText}</span>}
            </div>
          );
        })}
      </main>
    </div>
  );
}

MessageDesktopNavigation.propTypes = {
  footerIcons: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      Icon: PropTypes.elementType.isRequired,
      iconText: PropTypes.string.isRequired,
    }),
  ),
};
