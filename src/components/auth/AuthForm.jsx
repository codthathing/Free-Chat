const AuthForm = ({ children, buttonText }) => {
  return (
    <form className="flex flex-col gap-y-4 md:gap-y-6">
      {children}
      <button type="submit" onClick={(e) => e.preventDefault()} className="border-none outline-none bg-black text-white rounded-md md:rounded-xl lg:rounded-lg py-3 md:py-4 text-xs md:text-xl lg:text-sm">
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;
