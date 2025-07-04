const AuthSignInOpt = ({ array }) => {
  return (
    <div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-3">
      {array.map(({ id, icon, text }) => {
        return (
          <main key={id} className="flex gap-x-1 md:gap-x-5 lg:gap-x-4 justify-center items-center cursor-pointer border-gray-light border md:border-2 rounded-md md:rounded-xl lg:rounded-lg py-2 md:py-3.5">
            <img src={icon} alt={text} className="w-3 h-3 md:w-7 md:h-7 lg:w-6 lg:h-6" />
            <span className="font-semibold text-xs md:text-xl lg:text-sm">{text}</span>
          </main>
        );
      })}
    </div>
  );
};

export default AuthSignInOpt;
