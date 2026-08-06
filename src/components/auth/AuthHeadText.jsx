import PropTypes from "prop-types";

export default function AuthHeadText({ text }) {
  return <h1 className="font-bold text-xl md:text-3xl lg:text-lg text-heading-black">{text}</h1>;
};

AuthHeadText.propTypes = {
  text: PropTypes.string.isRequired,
}
