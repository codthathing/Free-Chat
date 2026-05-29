const AuthDivider = ({ text, array }) => {
  return (
    <>
      <span className="text-xs md:text-base lg:text-xs text-nowrap text-charcoal-black">{text}</span>
      <div className="flex gap-x-4">
        {array.map(({ id, icon }) => {
          return (
            <div key={id} className="w-8 h-8 flex justify-center items-center rounded-md bg-input-gray cursor-pointer">
              <img src={icon} alt={text} className="w-4 h-4 md:w-7 md:h-7 lg:w-6 lg:h-6" />
            </div>
          );
        })}
      </div>
      <i className="border-b lg:border-b border-soft-lavender w-full"></i>
    </>
  );
};

export default AuthDivider;
