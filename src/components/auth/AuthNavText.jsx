const AuthNavText = ({ text, onClick }) => {
  return <p onClick={onClick} className="text-xs md:text-xl lg:text-sm underline font-semibold self-end w-fit cursor-pointer">{text}</p>;
};

export default AuthNavText;
