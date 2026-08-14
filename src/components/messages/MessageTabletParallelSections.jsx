import {Route, Routes} from "react-router-dom";
import MessageParallelSections from "./MessageParallelSections.jsx";
import PropTypes from "prop-types";
import MutualPage from "../../pages/MutualPage.jsx";

export default function MessageTabletParallelSections({ width }) {
  if (width < 768 || width > 1023) return null;

  return (
    <Routes>
      <Route path="/" element={<MessageParallelSections sections={width < 768 || width > 1023}><div className="hidden md:flex items-center justify-center w-full h-full"><p className="text-charcoal-black md:text-xl lg:text-4xl">Hello, welcome to FreeChat</p></div></MessageParallelSections>} />
      <Route path=":uid" element={<MutualPage />} />
    </Routes>
  );
}

MessageTabletParallelSections.propTypes = {
  width: PropTypes.number.isRequired,
}