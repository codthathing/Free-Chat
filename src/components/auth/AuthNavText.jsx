const AuthNavText = ({ text, onClick, className }) => {
  return <p onClick={onClick} className={`text-xs md:text-xl lg:text-sm underline font-semibold self-end w-fit cursor-pointer ${className}`}>{text}</p>;
};

export default AuthNavText;
