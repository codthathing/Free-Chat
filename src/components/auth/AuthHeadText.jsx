const AuthHeadText = ({ head, text }) => {
  return (
    <div className="flex flex-col gap-y-0.15px md:gap-y-0.5 lg:gap-y-1">
      <h1 className="font-bold text-base md:text-2xl lg:text-lg">{head}</h1>
      {text && <p className="text-xs md:text-xl lg:text-sm text-gray-dark">{text}</p>}
    </div>
  );
};

export default AuthHeadText;
